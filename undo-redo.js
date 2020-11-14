'use strict';

function setEditorContents(contents) {
    $('#editor').val(contents);
}

$(function () {
    var history = new SimpleUndo({
        maxLength: 200,
        provider: function (done) {
            done($('#editor').val());
        },
        onUpdate: function () {
            //onUpdate is called in constructor, making history undefined
            if (!history) return;
        }
    });

    $('input').keyup(function () {
        // Save the key pressed by the user to a stack.
        history.save();
    });

    var resetTilt = true;

    function undoRedoCharacters(event) {
        // get the tilt angle of the device
        var angle = event.gamma;

        // If the angle is more than 45 degrees on the left, undo a character
        if(angle < -45 && resetTilt) {
            history.undo(setEditorContents);
            resetTilt = false;
        }

        // If the angle is more than 45 degrees on the right, redo a character
        if (angle > 45 && resetTilt) {
            history.redo(setEditorContents);
            resetTilt = false;
        }

        // If the phone is held normally, without a tilt, reset the tilt.
        // This is done because 'deviceorientation' event is evoked every second. It will undo
        // and redo characters everytime it's more than 45 degrees.
        if (angle > -20 && angle < 20) {
            resetTilt = true;
        }

    }
    // Event listener for listening to the device's orientation.
    window.addEventListener('deviceorientation', undoRedoCharacters);
});