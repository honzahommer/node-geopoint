#node-geopoint

> JavaScript coordinate conversion library between Decimal Degree and Deg-Min-Sec.

[![Release](https://img.shields.io/github/release/honzahommer/node-geopoint.svg)](https://github.com/honzahommer/geopoint/releases/latest)
[![npm version](https://img.shields.io/npm/v/node-geopoint.svg)](https://www.npmjs.com/package/node-geopoint)  
[![Build Status](https://img.shields.io/travis/honzahommer/node-geopoint/master.svg)](https://travis-ci.org/honzahommer/node-geopoint)
[![devDependency Status](https://img.shields.io/david/dev/honzahommer/node-geopoint.svg)](https://david-dm.org/honzahommer/node-geopoint?type=dev)

This library expects latitude and longitude in EPSG:4326 (WGS84). To convert between different projections check out [Proj4js](http://proj4js.org).

## Installation

```
npm install node-geopoint
```

### Convert Decimal -> Degrees

```
const geo = require('node-geopoint')

const lat = 58.74554729994484
const lng = 24.72504500749274
const res = geo(lat, lng)

console.log(res.lat.deg) // 58° 44' 43.97"
console.log(res.lng.deg) // 24° 43' 30.16"
```

### Convert Degrees -> Decimal

```
const geo = require('node-geopoint')

const lat = '58° 44\' 43.97"'
const lng = '24° 43\' 30.16"'
const res = geo(lat, lng)

console.log(res.lat.dec) // 58.74554722222222
console.log(res.lng.dec) // 24.725044444444443
```

## Original authors

* [Tanel Suurhans](http://twitter.com/tanelsuurhans)  
* [Tarmo Lehtpuu](http://twitter.com/tarmolehtpuu)
