/**
 * @format
 */

import {AppRegistry, Platform, UIManager} from 'react-native';
import MySaleApp from './Navigators/App';
import {name as appName} from './app.json';

if(Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

AppRegistry.registerComponent(appName, () => MySaleApp);
