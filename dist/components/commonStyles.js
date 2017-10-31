"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file commonStyles.ts
 * File contains variables for component styling. Each variable represents
 * a css style to be passed in to a component.
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
exports.PrimaryColor = "#1b4583";
exports.PrimaryColor2 = "#000000";
exports.listItemImage = {
    width: '80px',
    height: '80px'
};
exports.blueBackgroundPage = {};
exports.greyContainer = {
    backgroundColor: '#E0E0E0',
    padding: '10px 10px 10px 10px'
};
exports.whiteContainer = {
    backgroundColor: 'white',
    padding: '10px 10px 10px 10px'
};
exports.blueContainer = {
    backgroundColor: exports.PrimaryColor,
    padding: '10px 10px 10px 10px',
    color: 'white',
    textAlign: 'center',
    minHeight: 35,
    position: 'relative'
};
exports.titleStyles1 = {
    color: exports.PrimaryColor,
    fontWeight: 900,
    padding: 15,
    fontSize: 18
};
exports.subtitleStyles1 = {
    color: exports.PrimaryColor2,
    fontWeight: 700,
    padding: '0px 15px 0px 15px',
    fontSize: 14
};
exports.titleStyles3 = {
    color: exports.PrimaryColor,
    fontWeight: 900,
    padding: '5px 15px 5px 15px',
    fontSize: 18
};
exports.subtitleStyles3 = {
    color: exports.PrimaryColor2,
    fontWeight: 700,
    padding: '5px 15px 5px 15px',
    fontSize: 14
};
exports.titleStyles2 = {
    color: exports.PrimaryColor2,
    fontWeight: 900,
    fontSize: 18,
    textAlign: 'center'
};
exports.titleStylesLeft2 = __assign({}, exports.titleStyles2, { textAlign: 'left' });
exports.contentContainer1 = {
    margin: '0px auto 0px auto',
    width: 500
};
exports.socialIcons = {
    width: 50,
    marginRight: 10
};
exports.fullWidthDialagStyle = {
    width: '100%',
    maxWidth: '700px'
};
exports.homeFooterDefault = {};
exports.homeFooterAbsolute = {
    position: 'absolute',
    bottom: 0
};
exports.appBarTitleStyle = {
    position: 'relative',
    left: -20,
    top: 1
};
exports.appBarIconeStyle = {
    position: 'relative',
    left: -10,
};
exports.toolBarContentLeft = {
    position: 'absolute',
    top: 0,
    width: 200
};
exports.toolBarContentRight = {
    position: 'absolute',
    right: 0,
    top: 0
};
//# sourceMappingURL=commonStyles.js.map