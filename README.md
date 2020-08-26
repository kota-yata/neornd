# neornd
[![NPM](https://nodei.co/npm/neornd.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/neornd/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c11072c7-7117-4c85-9a57-99dd75e8bf96/deploy-status)](https://app.netlify.com/sites/neornd/deploys)
[![npm version](https://badge.fury.io/js/neornd.svg)](https://badge.fury.io/js/neornd)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/kota-yata/neornd.svg?branch=master)](https://travis-ci.com/kota-yata/neornd)
![npm](https://img.shields.io/npm/dt/neornd)

<img src='https://user-images.githubusercontent.com/51294895/90859152-97503c80-e3c2-11ea-8eda-f8b88feb1ecb.png' style='width:800px' />

neornd makes Math.random() simple and safe by using crypto module. You can get a random number with number of decimal place you want easily.

## USAGE

```
npm i neornd
```

```javascript
const neornd = require("neornd");

// neornd.number(min num, max num, num of decimal places)
const random_num = neornd.number(1,10,3);
console.log(random_num); // => number between 1 and 10 with 3 decimal places e.g. 5.342

//neornd.string(length, options)
const random_str = neornd.string(10, {uppercase: false, symbol: false}) // => 10 digit string including lowercase and number e.g. 'fa78d7g8ss'
```
<div style="background:#333333; padding:5px;">
<h2 style="color:#e31b4e; background:#222222; text-align:center; font-weight:bold;">! ATTENTION !</h2>
<h3 style="text-align:center; font-weight:bold">About neornd.number()</h3>
This module use <a href="https://docs.microsoft.com/ja-jp/dotnet/visual-basic/language-reference/data-types/double-data-type">double type number</a>, so maximum number is <code>1.797693e+308</code>, minimum number is <code>2.225074e-308</code>. 

3rd argument must be integer, and<b style="color:#e31b4e"> must be smaller than 14 (to avoid stack overflow) and greater than 0.</b></div>

**See [Document Website](https://neornd.netlify.app/module-neornd.html) for more details**

---

## DEVELOPMENT

#### install

```
npm install
```

#### test

```
npm test
```

#### update docs

```
npm run docs
```

#### format code

```
npm run lint
```

## LICENSE
MIT

See [LICENSE](https://github.com/kota-yata/neornd/blob/master/LICENSE)

## HOW TO CONTRIBUTE
If you find bugs, feel free to create issue and PR :) I will look at it ASAP.
