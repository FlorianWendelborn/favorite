'use strict';

var http = require('http');
var https = require('https');
var nodeURL = require('url');

var cheerio = require('cheerio');
var request = require('request');

/**
 *	Returns the website's favicon.
 *
 *	@example
 *	get('https://nodejs.org', function (err, data) {
 *		console.log(err, data);
 *	});
 *	// null, 'https://nodejs.org/favicon.ico'
 *
 *	@param url {String} URL to get the favicon from.
 *	@param callback {Function} Callback to call
 *	@return {Function} The already executed callback function.
 */
function getFavicon (url, callback) {
	request(url, function (err, res, data) {
		if (!err) {
			// parse HTML
			var view = cheerio.load(data);

			// <link rel="icon"/>
			var links = view('link[rel="icon"]');

			// <link rel="shortcut icon">
			if (!links.length) {
				links = view('link[rel="shortcut icon"]');
			}
			// at least one exists
			if (links.length && links[0] && links[0].attribs && links[0].attribs.href) {
				var link = links[0].attribs.href;
				var absoluteURL = nodeURL.resolve(url, link);
				return callback(null, absoluteURL)
			} else {
				// fallback to favicon.ico
				var pathToFavicon = nodeURL.resolve(url, '/favicon.ico');
				request(pathToFavicon, function (err, res, data) {
					if (!err && res.statusCode === 200) {
						return callback(null, pathToFavicon);
					} else {
						return callback(err, null);
					}
				});
			}
		} else {
			return callback(err, null);
		}
	});
}

module.exports = getFavicon;
