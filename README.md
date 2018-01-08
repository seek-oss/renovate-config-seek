[![Build Status](https://img.shields.io/travis/seek-oss/renovate-config-seek/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/renovate-config-seek) [![npm](https://img.shields.io/npm/v/renovate-config-seek.svg?style=flat-square)](https://www.npmjs.com/package/renovate-config-seek) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# renovate-config-seek
Shareable [Renovate](https://renovateapp.com) config for [SEEK](https://github.com/seek-oss).

Keep your internal SEEK packages evergreen by automatically generating pull requests when new versions are published.

This preset extends `config:base`, so all of the usual Renovate defaults are applied.

**By default, this preset disables automatic package updates for all non-SEEK packages.** If you want to reintroduce standard Renovate behaviour for other packages, you'll need to use the ["enabled" option](https://renovateapp.com/docs/configuration-reference/configuration-options#enabled).

## Usage
You can set this up [a few different ways](https://renovateapp.com/docs/getting-started/configure-renovate#configuration-location), but the easiest option is to add it to your `package.json` like so:

```js
{
  "renovate": {
    "extends": [
      "seek"
    ]
  }
}
```

## License

MIT.
