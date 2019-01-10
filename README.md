# react-native-error-handling
Easiest way to handle errors (especially the errors represented by notifications).

### Pre-requests:

##### iOS
Install Xcode via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). This willl come together with iOS Simulator and all the necessary to build the app on iOS.

##### Android
Follow the steps from [Android Development environment doc](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment).

##### Common
Install node, watchman and react-native-cli
```
brew install node
brew install watchman
npm install -g react-native-cli
```

### Clone Repo

````
git clone git@github.com:MVPFactory/cbre_homematch_mobile.git
````


### Install dependencies via npm
````
npm install
````

## Run the Application

## iOS
The following command will run the application on the iOS simulator by default. 

````
react-native run-ios
````
Alternatively open the XArchive file within Xcode. 

If you want to run the app on a physical iOS device, follow [these instructions](https://facebook.github.io/react-native/docs/running-on-device).

## Android
The following command will run the application on an Android Virtual Device if any is opened. You can use Android Studio ([see docs](https://facebook.github.io/react-native/docs/getting-started.html#using-a-virtual-device)) for creating a Virtual Device or you can use [Genymotion](https://www.genymotion.com/) as well.

````
react-native run-android
````

If you want to run the app on a physical Android device, follow [these instructions](https://facebook.github.io/react-native/docs/running-on-device).
