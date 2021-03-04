import 'react-native-gesture-handler';

/**
 * @format
 */

 import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

import { Provider } from "react-redux";
import configureStore from "./app/store/Store";
const store = configureStore();

const managerApp = () =>
<Provider store={store}>
    <App />
</Provider>

AppRegistry.registerComponent(appName, () => managerApp);
