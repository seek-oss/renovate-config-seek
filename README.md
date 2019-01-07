[![Build Status](https://img.shields.io/travis/seek-oss/renovate-config-seek/master.svg?style=flat-square)](http://travis-ci.org/seek-oss/renovate-config-seek) [![npm](https://img.shields.io/npm/v/renovate-config-seek.svg?style=flat-square)](https://www.npmjs.com/package/renovate-config-seek) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

# renovate-config-seek
Shareable [Renovate](https://renovateapp.com) config for [SEEK](https://github.com/seek-oss).

This preset extends `config:base`, so all of the usual Renovate defaults are applied, but it also provides a couple of key benefits:
- By default, to reduce noise, only SEEK packages are automatically kept up to date, generating pull requests whenever new versions are published.
- Commit messages and pull request titles are specially formatted to follow our [commitlint-config-seek](https://github.com/seek-oss/commitlint-config-seek) conventions.

## Usage
You can set this up [a few different ways](https://renovateapp.com/docs/getting-started/configure-renovate#configuration-location), but it's recommended that you add a `renovate.json` file to your project with the following contents:

```js
{
  "extends": [
    "seek"
  ]
}
```

**By default, this preset disables automatic package updates for all non-SEEK packages.** If you want to reintroduce standard Renovate behaviour for other packages, you'll need to use the ["enabled" option](https://renovatebot.com/docs/configuration-options/#enabled).

For example:

```js
{
  "extends": [
    "seek"
  ],
  "packageRules": [
    {
      "packageNames": ["react"],
      "enabled": true
    }
  ]
}
```

## License

MIT.
