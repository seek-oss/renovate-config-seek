# Contributing

Hi there, thanks for checking out our repo!

renovate-config-seek is a set of [shareable Renovate config presets] that we use at SEEK.
While third-party contributions are certainly welcome,
this project is entirely driven by our internal requirements.

SEEKers: this repo is public,
so don't commit or post anything that isn't ready for the entire world to see.

## Table of contents

- [Getting started](#getting-started)
  - [I want to discuss or report something](#i-want-to-discuss-or-report-something)
  - [I want to contribute a change](#i-want-to-contribute-a-change)
- [Development](#development)
  - [Git workflow](#git-workflow)
  - [Testing](#testing)
- [Releases](#releases)

## Getting started

renovate-config-seek is documented through its [README](/README.md).
Its presets are mastered as JSON files in the repository root.

Keep in mind that Renovate is incredibly difficult to configure correctly.
Certain "bugs" in our presets are likely unfixable based on Renovate's current configuration logic.

### I want to discuss or report something

[Submit an issue] if you have a question, feature request or bug report.

If you work at SEEK, [#typescriptification] is your friend.

### I want to contribute a change

Follow the [development](#development) steps below to [create a pull request].
Please explain the context and intent of your change so we can better validate it.

## Development

### Git workflow

We use [GitHub flow](https://guides.github.com/introduction/flow/).

Create a new branch off of the latest commit on master:

```shell
git fetch origin
git switch --create your-branch-name origin/master
```

Develop, [test](#testing) and commit your changes on this branch.

```shell
git add --all
git commit
```

Finally, push your branch to GitHub and [create a pull request]:

```shell
git push --set-upstream origin your-branch-name
```

If you don't have push access,
you may need to [fork the repo] and push there instead:

```shell
git remote add fork git@github.com:your-username/renovate-config-seek.git
git push --set-upstream fork your-branch-name
```

A maintainer will get to your pull request and review the changes.
If all is well, they will merge your pull request into master.

### Testing

If you are making a non-trivial change,
we recommend that you test it out on an individual repository first.

Extending an existing renovate-config-seek config is often not enough,
as package rule ordering can affect Renovate's behaviour in non-obvious ways.

```json5
// Not recommended for testing changes to the preset. Instead, copy across the
// raw JSON of the preset and tweak it from there.
{
  extends: ['github>seek-oss/renovate-config-seek'],
  packageRules: [
    // ...
  ],
}
```

Another option for testing is to freshly [install Renovate] on a repository.

The Renovate bot will create a `Configure Renovate` [onboarding PR],
which includes a preview of the pull requests it will open based on the provided config.
You can push changes to this onboarding PR to update the preview.

## Releases

renovate-config-seek consumers track the master branch on GitHub,
so merging a pull request constitutes a release.

[#typescriptification]: https://seekchat.slack.com/channels/typescriptification
[create a pull request]: https://github.com/seek-oss/renovate-config-seek/compare
[fork the repo]: https://github.com/seek-oss/renovate-config-seek/fork
[install renovate]: https://github.com/apps/renovate/installations/new
[onboarding pr]: https://docs.renovatebot.com/configure-renovate/
[shareable renovate config presets]: https://docs.renovatebot.com/config-presets/
[submit an issue]: https://github.com/seek-oss/renovate-config-seek/issues/new/choose
