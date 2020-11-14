# directional-motion-based-undo-redo

## System Requirements
- For running the code, any modern computer will work.
- For running the application,
    - An Android phone that has an accelerometer built-in.
    - Latest version of Mozilla Firefox or Google Chrome.

## Instructions to run the code
- Download ZIP from the repo - https://github.com/anaghadudihalli/directional-motion-based-undo-redo.
- This project uses accelerometer data. So, even though you can open the ```index.html``` file on a desktop, you cannot test the undo and redo features.
- Steps to run this code on a computer while debugging on an Android device (steps taken from [here](https://developers.google.com/web/tools/chrome-devtools/remote-debugging)):
    - Connect the android phone with your computer using a USB cable.
    - Open the Developer Options screen on your Android. See [Configure On-Device Developer Options](https://developer.android.com/studio/debug/dev-options).
    - Select Enable USB Debugging.
    - On your development machine, open Chrome.
    - Go to ```chrome://inspect#devices```.
    - Make sure that the Discover USB devices checkbox is enabled.
    - Connect your Android device directly to your development machine using a USB cable. The first time you do this, you usually see that DevTools has detected an offline device. If you see the model name of your Android device, then DevTools has successfully established the connection to your device.
    - If your device is showing up as Offline, accept the Allow USB Debugging permission prompt on your Android device.
    - Open Chrome on your Android device.
    - In the ```chrome://inspect/#devices```, you see your Android device's model name, followed by its serial number. Below that, you can see the version of Chrome that's running on the device, with the version number in parentheses. Each open Chrome tab gets its own section. You can interact with that tab from this section. 
    - In the Open tab with url text box, enter a URL and then click Open. The page opens in a new tab on your Android device.
    - Click Inspect next to the URL that you just opened. A new DevTools instance opens. 


## Instructions on how to use
- On an Android phone, open https://adudih2.people.uic.edu/anagha_dudihalli_cs522_hw3/ in either Mozilla Firefox or Google Chrome.
- Enter your text in the textbox.
- Tilt your phone to the left, at approximately more than 45° to undo a character.
- Tilt your phone to the right, at approximately more than 45° to redo a character.
- Watch a quick demo here - https://youtu.be/QtZpRcaXnDM.

## Credits

Used the Simple-undo JS package from https://github.com/mattjmattj/simple-undo.git.
