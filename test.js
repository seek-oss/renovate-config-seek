const assert = require('assert');
const { validateConfig } = require('renovate/lib/config/validation');
const pkgJson = require('./package.json');

const config = pkgJson['renovate-config'];

Object.keys(config).forEach(presetName => {
  const { errors, warnings } = validateConfig(config[presetName]);

  assert(errors.length === 0, `Preset '${presetName}' contains errors:\n\n${JSON.stringify(errors, null, 2)}`);
  assert(warnings.length === 0, `Preset '${presetName}' contains warnings:\n\n${JSON.stringify(warnings, null, 2)}`);
});
