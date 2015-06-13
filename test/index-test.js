var expect = require('expect.js');
var favorite = require('../');

describe('load favicons', function () {
	it('google favicon', function (done) {
		this.timeout(10000);
		favorite.get('https://google.com', function (err, data) {
			expect(err).to.equal(null);
			expect(data).to.be.ok();
			done();
		});
	});

	it('youtube favicon', function (done) {
		this.timeout(10000);
		favorite.get('https://youtube.com', function (err, data) {
			expect(err).to.equal(null);
			expect(data).to.be.ok();
			done();
		});
	});

	it('nodejs favicon', function (done) {
		this.timeout(10000);
		favorite.get('https://nodejs.org', function (err, data) {
			expect(err).to.equal(null);
			console.log(data);
			expect(data).to.be.ok();
			done();
		});
	});
});
