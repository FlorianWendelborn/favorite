# favorite

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Build Status](https://api.travis-ci.org/dodekeract/favorite.svg)](https://travis-ci.org/dodekeract/favorite/)
[![Code Climate](https://codeclimate.com/github/dodekeract/favorite/badges/gpa.svg)](https://codeclimate.com/github/dodekeract/favorite)
[![NPM Downloads](https://img.shields.io/npm/dm/favorite.svg)](https://npmjs.com/package/favorite)
[![NPM Dependencies](https://david-dm.org/dodekeract/favorite.png)](https://npmjs.com/package/favorite)
[![Code Documentation](https://inch-ci.org/github/dodekeract/favorite.svg)](https://inch-ci.org/github/dodekeract/favorite)

Node.js library to get favicons.

## Installation
**Basic**: ````npm install favorite````

**As Dependency**: ````npm install favorite --save````

**Require in Node**: ````var favorite = require('favorite');````

## Methods
### get (String url, Function callback)
Returns the website's favicon.

Example:
````javascript
favorite.get('https://nodejs.org', function (err, data) {
	console.log(err, data);
});
// null, 'https://nodejs.org/favicon.ico'
````
