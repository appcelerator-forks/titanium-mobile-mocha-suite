/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */
var should = require('./utilities/assertions'),
	utilities = require('./utilities/utilities');

describe('Titanium.UI.ScrollableView', function () {

	// FIXME Get working on iOS
	(utilities.isIOS() ? it.skip : it)('apiName', function () {
		should(Ti.UI.ScrollableView).have.readOnlyProperty('apiName').which.is.a.String;
		should(Ti.UI.ScrollableView.apiName).be.eql('Ti.UI.ScrollableView');
	});

	(utilities.isIOS() ? it.skip : it)('views', function () {
		var bar = Ti.UI.createScrollableView({});
		should(bar.views).be.an.Array; // iOS returns undefined
		should(bar.getViews).be.a.Function;
		should(bar.views).be.empty;
		should(bar.getViews()).be.empty;
		bar.views = [Ti.UI.createView(), Ti.UI.createView()];
		should(bar.views.length).eql(2);
		should(bar.getViews().length).eql(2);
	});

	it('currentPage', function () {
		var bar = Ti.UI.createScrollableView({});
		should(bar.currentPage).be.a.Number;
		should(bar.getCurrentPage).be.a.Function;
		should(bar.currentPage).eql(0);
		should(bar.getCurrentPage()).eql(0);
		bar.views = [Ti.UI.createView(), Ti.UI.createView()];
		bar.currentPage = 1;
		should(bar.currentPage).eql(1);
		should(bar.getCurrentPage()).eql(1);
	});

	it('moveNext', function () {
		var bar = Ti.UI.createScrollableView({});
		should(bar.moveNext).be.a.Function;
		bar.views = [Ti.UI.createView(), Ti.UI.createView()];
		bar.moveNext();
		should(bar.currentPage).eql(1);
		should(bar.getCurrentPage()).eql(1);
	});

	it('movePrevious', function () {
		var bar = Ti.UI.createScrollableView({});
		should(bar.movePrevious).be.a.Function;
		bar.views = [Ti.UI.createView(), Ti.UI.createView()];
		bar.moveNext();
		should(bar.currentPage).eql(1);
		should(bar.getCurrentPage()).eql(1);
		bar.movePrevious();
		should(bar.currentPage).eql(0);
		should(bar.getCurrentPage()).eql(0);
	});
});
