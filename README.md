# estudu
Tizen Wearable App for issuing IFTTT commands.

Developed for use on a Samsung Gear S2.

## Compilation and Installation

This project requires the [Tizen SDK 2.4](https://developer.tizen.org/development/tools/download) with a valid Samsung Tizen Developer certificate to deploy to your device.

Once you have the SDK and the certificate properly installed you need only change the ifttt_key config variable to be your [IFTTT Maker](https://ifttt.com/maker) key and deploy to your device.  **Remember that your device must be set to debug mode.**

## Usage

Simply launch the app and navigate to the option your wish to activate.  If the event trigger was successful, the app will return you to the main menu after firing.

Currently there are 4 supported options. (examples published, you can make your own recipes)
- [Scout Arm Away](https://ifttt.com/recipes/364103-maker-recipe-to-initiate-arm_away-scout-alarm)
- [Scout Disarm](https://ifttt.com/recipes/364102-maker-recipe-to-initiate-disarm-scout-alarm-estudu)
- Scout Chirp (for testing)
- [Nest Cycle Fan](https://ifttt.com/recipes/364101-maker-recipe-to-initiate-nest-fan-estudu)

## Screenshots

![alt tag](http://i.imgur.com/ozKdHhV.png)
![alt tag](http://i.imgur.com/04FGHVc.png)

## Dependencies

- [JQuery](https://github.com/jquery/jquery) (because I couldn't figure out how to make TAU play nice with my first project)
- [TAU (Tizen Advanced UI)](https://developer.tizen.org/dev-guide/2.3.1/org.tizen.web.apireference/html/ui_fw_api/mobile/index.htm)

## License Information

MIT License

Tizen Advanced UI (TAU) is covered under the [Flora License] (http://floralicense.org/license/)

Vendor Icons used in the UI of this app are owned by their respective companies and probably protected by their trademarks.  // TODO: Better legalese.
