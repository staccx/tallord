# Tallord
VERY specific package to convert numbers to norwegian speech

## Install
`yarn add tallord`

## Use
```javascript
import {tallord} from "tallord"
import nn from "tallord/i18n/nn"

const word = tallord(12312341) // tolv millioner, tre hundre og tolv tusen, tre hundre og førtién
const otherLocale = tallord(100, nn) // eitt hundre 

const yourOwn = tallord(256, {
  ...nn,
  baseSeparator: "-",
  tenSeparator: () => ""
}) // to-hundre-femtiseks
```
