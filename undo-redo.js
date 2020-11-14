'use strict';

function updateButtons(history) {
    $('#undo').attr('disabled', !history.canUndo());
    $('#redo').attr('disabled', !history.canRedo());
}

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

            updateButtons(history);
        }
    });

    $('#editor').on('keydown', function () {
        history.save();
    });

    updateButtons(history);
    var resetTilt = true;

    function handleOrientation(event) {
        var gamma = event.gamma;

        if(gamma < -45 && resetTilt) {
            history.undo(setEditorContents);
            resetTilt = false;
        }

        if (gamma > 45 && resetTilt) {
            history.redo(setEditorContents);
            resetTilt = false;
        }

        if (gamma > -20 && gamma < 20) {
            resetTilt = true;
        }

    }
    window.addEventListener('deviceorientation', handleOrientation);
});

