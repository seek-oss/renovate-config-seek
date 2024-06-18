# renovate-config-seek

[![Validate](https://github.com/seek-oss/renovate-config-seek/actions/workflows/validate.yml/badge.svg)](https://github.com/seek-oss/renovate-config-seek/actions/workflows/validate.yml)

Mildly-aggressive [Renovate] presets for keeping dependencies up to date.

[renovate]: https://renovatebot.com/

## Table of contents

- [Presets](#presets)
  - [default](#default)
  - [non-critical](#non-critical)
  - [third-party-major](#third-party-major)
- [Usage](#usage)
- [Contributing](https://github.com/seek-oss/renovate-config-seek/blob/master/CONTRIBUTING.md)

## Presets

### `default`

Dependencies are selectively grouped and scheduled:

| Type                              | Grouped | Schedule                             |
| :-------------------------------- | :------ | :----------------------------------- |
| SEEK (select package versions)    | No      | Weekday, automerged                  |
| SEEK (rest)                       | No      | Weekday                              |
| Pin dependency                    | Yes     | Weekday, automerged                  |
| Go module digest update           | Yes     | Monthly                              |
| Go module version update          | No      | Monday, Friday                       |
| JavaScript dependency             | No      | Monday, Friday                       |
| JavaScript devDependency          | Yes     | Fortnightly on Tuesday               |
| JavaScript peerDependency         | Yes     | Fortnightly on Tuesday               |
| TypeScript definition             | Yes     | Fortnightly on Tuesday, automerged   |
| Buildkite plugin                  | Yes     | Fortnightly on Wednesday             |
| Docker image                      | Yes     | Fortnightly on Wednesday             |
| Lock file maintenance             | Yes     | Fortnightly on Wednesday, automerged |
| Noisy dependency (e.g. `aws-sdk`) | No      | Monthly                              |

Pull requests are tersely named:

| Type                      | Example                       |
| :------------------------ | :---------------------------- |
| Production dependency     | `fix: pino 5.12.2`            |
| Non-production dependency | `deps: npm dev dependencies`  |
| Lock file maintenance     | `deps: lock file maintenance` |

### `non-critical`

| Type                    | Grouped | Schedule                             |
| :---------------------- | :------ | :----------------------------------- |
| Gantry Buildkite plugin | No      | Weekday                              |
| \*                      | Yes     | Monday                               |
| Lock file maintenance   | Yes     | Fortnightly on Wednesday, automerged |

| Type                    | Example                         |
| :---------------------- | :------------------------------ |
| Gantry Buildkite plugin | `deps: seek-jobs/gantry v1.0.0` |
| \*                      | `fix: all dependencies`         |
| Lock file maintenance   | `deps: lock file maintenance`   |

### `third-party-major`

Like the `default` preset, but less noisy as it only monitors major updates for non-SEEK deps.
Non-major Buildkite plugin and Docker image versions are still renovated.

## Usage

### Getting started with presets

Reference in an [extends] array within [Renovate] config:

[extends]: https://renovatebot.com/docs/configuration-options/#extends

```json5
{
  extends: [
    // Required to access private SEEK packages
    'local>seek-jobs/renovate-config',

    'github>seek-oss/renovate-config-seek',
  ],
}
```

Choose a named preset with a `:preset` suffix:

```json5
{
  extends: [
    // Required to access private SEEK packages
    'local>seek-jobs/renovate-config',

    'github>seek-oss/renovate-config-seek:non-critical'.
  ],
}
```

### Adding your own package rules

Disable incompatible major version upgrades for a specific package:

```json5
{
  extends: [
    // Required to access private SEEK packages
    'local>seek-jobs/renovate-config',

    'github>seek-oss/renovate-config-seek',
  ],
  packageRules: [
    {
      matchManagers: ['npm'],
      matchDepNames: ['your-package-name-here'],
      matchUpdateTypes: ['major'],

      enabled: false,
    },
  ],
}
```

Ignore a specific package version:

```json5
{
  extends: [
    // Required to access private SEEK packages
    'local>seek-jobs/renovate-config',

    'github>seek-oss/renovate-config-seek',
  ],
  packageRules: [
    {
      matchManagers: ['npm'],
      matchDepNames: ['your-package-name-here'],

      allowedVersions: '!/^1\\.2\\.3$/',
    },
  ],
}
```

Ungroup a specific package that is usually grouped by the preset:

```json5
{
  extends: [
    // Required to access private SEEK packages
    'local>seek-jobs/renovate-config',

    'github>seek-oss/renovate-config-seek:non-critical',
  ],
  packageRules: [
    {
      matchManagers: ['npm'],
      matchDepNames: ['your-package-name-here'],
      matchUpdateTypes: ['major', 'minor', 'patch'],

      commitMessageExtra: '{{newValue}}',
      commitMessageTopic: '{{depName}}',
      groupName: null,
      schedule: 'before 3:00 am every weekday',
    },
  ],
}
```

For more information, see Renovate's comprehensive documentation of its [configuration options].

[configuration options]: https://docs.renovatebot.com/configuration-options
