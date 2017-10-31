"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file src/index.tsx
 * Renders the application.
 *
 * Created by Jack LightFoot on 08/22/2017
 *
 * T2 PWA Starter
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
var React = require("react");
var redux_1 = require("redux");
var redux_persist_1 = require("redux-persist");
var localForage = require("localforage");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
var lightBaseTheme_1 = require("material-ui/styles/baseThemes/lightBaseTheme");
var redux_thunk_1 = require("redux-thunk");
var ReactDOM = require("react-dom");
var react_hot_loader_1 = require("react-hot-loader");
var injectTapEventPlugin = require("react-tap-event-plugin");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var Main_1 = require("./containers/Main");
var reducers_1 = require("./reducers");
var actions_1 = require("./actions");
var OfflinePluginRuntime = require("offline-plugin/runtime");
OfflinePluginRuntime.install();
injectTapEventPlugin();
require('./index.html'); //load and emit index.html to destination directory
require('./manifest.json'); //load and emit manifest.json to destination directory
require("file-loader?name=[name].[ext]!./favicon.ico");
var render = function (RootComponent) {
    var thunkArgs = {
        isCordova: __IS_CORDOVA_BUILD__,
        platform: __IS_CORDOVA_BUILD__ ? window.device.platform.toLowerCase() : 'browser',
        nativeSettings: __IS_CORDOVA_BUILD__ ? window.cordova.plugins.settings : null,
        appPrefix: __REDUX_PERSIST_PREFIX__
    };
    var store = redux_1.createStore(reducers_1.default, undefined, redux_1.compose(redux_1.applyMiddleware(redux_thunk_1.default.withExtraArgument(thunkArgs)), redux_persist_1.autoRehydrate()));
    redux_persist_1.persistStore(store, {
        blacklist: ['view'],
        //whitelist: [],
        storage: localForage,
        keyPrefix: __REDUX_PERSIST_PREFIX__
    });
    if (__DEVTOOLS__) {
        store.subscribe(function () {
            console.log(store.getState()); // list entire state of app
        });
    }
    store.dispatch(actions_1.setUserPlatform(thunkArgs.platform));
    var cordovaPause = function () {
        // store.dispatch(someAction());
    };
    var cordovaResume = function () {
        // store.dispatch(someAction());
    };
    if (__IS_CORDOVA_BUILD__) {
        document.addEventListener("pause", cordovaPause, false);
        document.addEventListener("resume", cordovaResume, false);
    }
    ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(lightBaseTheme_1.default) },
            React.createElement(react_redux_1.Provider, { store: store },
                React.createElement(react_router_dom_1.HashRouter, null,
                    React.createElement(RootComponent, { version: __APP_VERSION__, defaultTitle: __APP_NAME__, appType: __APP_TYPE__ }))))), document.getElementById("spaApp"));
};
if (__IS_CORDOVA_BUILD__) {
    document.addEventListener("deviceready", function () {
        render(Main_1.default);
    });
}
else {
    render(Main_1.default);
    // Hot Module Replacement API. Only used when running the dev server.
    if (module.hot) {
        module.hot.accept('./containers/Main', function () {
            render(Main_1.default);
        });
    }
}
//# sourceMappingURL=index.js.map