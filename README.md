# neornd
[![Build Status](https://travis-ci.com/kota-yata/neornd.svg?branch=master)](https://travis-ci.com/kota-yata/neornd)
![npm](https://img.shields.io/npm/dt/neornd)

neornd generates random number/bigint/string, and sorts given string randomly. neornd uses crypto module in Node.js instead of standard Math library.

## USAGE
### Install
```
yarn add neornd
```

You **CANNOT** use neornd on browser as neornd uses crypto module, which is only available on Node.js.


```javascript
import neornd from "neornd";

// neornd.number(min num, max num, num of decimal places)
const random_num = neornd.number(1,10,3);
console.log(random_num); // => number between 1 and 10 with 3 decimal places e.g. 5.342

//neornd.string(length, options)
const random_str = neornd.string(10, {lowercase: true, uppercase: false, number: true, symbol: false}) // => 10 digit string including lowercase and number e.g. 'fa78d7g8ss'
```

### Arguments
#### neornd.number()
  - 1st argument : minimum integer
  - 2nd argument : maximum integer
  - 3rd argument : Number of digits after decimal point you want to get
#### neornd.string()
  - 1st argument : Length of string you want to get
  - 2nd argument *(Optional)* : Type of string you want to include in the result string
    | name | value |
    | ---- | ----- |
    | lowercase | boolean |
    | uppercase | boolean |
    | number | boolean |
    | symbol | boolean |
#### neornd.sort()
  - 1st argument : String you want to sort
#### neornd.bigint()
  - 1st argument : minimum byte length
  - 2nd argument : maximum byte length

### About neornd.number()
JavaScript's number type is essentially able to contain up to only $2^{53} - 1$. In case you want to calculate with large numbers, use ```neornd.bigint()```

## DEVELOPMENT

#### install

```
yarn install
```

#### test

```
yarn test
```

#### update docs

```
yarn run docs
```

#### format code

```
yarn lint
```

## LICENSE
MIT

See [LICENSE](https://github.com/kota-yata/neornd/blob/master/LICENSE)

## HOW TO CONTRIBUTE
Feel free to create issue and PR :) I will check it ASAP.
