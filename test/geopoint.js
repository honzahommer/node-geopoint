const chai = require('chai')
const should = require('should')
const geopoint = require('../')
const test = {
  lat: {
    dec: 58.74554722222222,
    deg: '58° 44\' 43.97"'
  },
  lng: {
    dec: 24.725044444444443,
    deg: '24° 43\' 30.16"'
  }
}

describe('node-geopoint', function() {
  describe('valid args', function() {
    it('it should return NaN for invalid args', function (done) {
      const res = geopoint('foo', 'bar')

      res.should.containEql({ lat: { dec: NaN, deg: NaN }, lng: { dec: NaN, deg: NaN }})

      done()
    });
  });

  describe('deg2dec fn', function() {
    it('it should convert degrees to decimals', function (done) {
      const res = geopoint(test.lat.deg, test.lng.deg)

      res.should.containEql({ lat: { dec: test.lat.dec, deg: test.lat.deg }, lng: { dec: test.lng.dec, deg: test.lng.deg }})

      done()
    });
  });

  describe('dec2deg fn', function() {
    it('it should convert decimals to degrees', function (done) {
      const res = geopoint(test.lat.dec, test.lng.dec)

      res.should.containEql({ lat: { dec: test.lat.dec, deg: test.lat.deg }, lng: { dec: test.lng.dec, deg: test.lng.deg }})

      done()
    });
  });
});
