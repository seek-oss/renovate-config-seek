const assert = require('assert');
const { validateConfig } = require('renovate/lib/config/validation');
const pkgJson = require('./package.json');

const config = pkgJson['renovate-config'];

// Validate the config with Renovate

Object.keys(config).forEach(presetName => {
  const { errors, warnings } = validateConfig(config[presetName]);
  assert(errors.length === 0, `Preset '${presetName}' contains errors:\n\n${JSON.stringify(errors, null, 2)}`);
  assert(warnings.length === 0, `Preset '${presetName}' contains warnings:\n\n${JSON.stringify(warnings, null, 2)}`);
});

// Test that we correctly match SEEK packages

const seekPackageRegex = new RegExp(pkgJson['renovate-config'].default.packageRules[0].excludePackagePatterns[0]);

const exampleSeekPackages = [
  'sku',
  'eslint-config-sku',
  'seek-style-guide',
  'eslint-config-seek',
  'babel-plugin-seek-style-guide',
  '@seek/private-package'
];

exampleSeekPackages.forEach(exampleSeekPackage => {
  assert(seekPackageRegex.test(exampleSeekPackage), `${exampleSeekPackage} should match`);
});

// Test that we correctly ignore non-SEEK packages

const exampleNonSeekPackages = [
  'react',
  'webpack',
  'jest'
];

exampleNonSeekPackages.forEach(exampleNonSeekPackage => {
  assert(!seekPackageRegex.test(exampleNonSeekPackage), `${exampleNonSeekPackage} should *not* match`);
});
