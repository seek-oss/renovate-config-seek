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
