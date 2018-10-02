const assert = require('assert');
const pkgJson = require('./package.json');

// Validate the config with Renovate
require('renovate/bin/config-validator');

// Test that we correctly match SEEK packages
const seekPackageRegex = new RegExp(pkgJson['renovate-config'].default.packageRules[0].excludePackagePatterns[0]);

const exampleSeekPackages = [
  'sku',
  'eslint-config-sku',
  'seek-style-guide',
  'eslint-config-seek',
  'babel-plugin-seek-style-guide',
  '@seek/private-package',
  'braid-design-system',
  'braid-design-system-webpack',
  'babel-plugin-braid-design-system'
];

exampleSeekPackages.forEach(exampleSeekPackage => {
  assert(seekPackageRegex.test(exampleSeekPackage), `${exampleSeekPackage} should match`);
});

// Test that we correctly ignore non-SEEK packages
const exampleNonSeekPackages = [
  'react',
  'webpack',
  'jest',
  'braid' // We want to own 'braid-design-system', not 'braid'
];

exampleNonSeekPackages.forEach(exampleNonSeekPackage => {
  assert(!seekPackageRegex.test(exampleNonSeekPackage), `${exampleNonSeekPackage} should *not* match`);
});
