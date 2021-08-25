const cp = require('child_process');
const os = require('os');
const path = require('path');
const fs = require('fs');

const npxCmd = os.platform().startsWith('win') ? 'npx.cmd' : 'npx';
const mode = process.argv[2] || 'production';

// set to load .env.{NODE_ENV}* files. This will be overridden by cra
process.env.NODE_ENV = mode;

const configPath = path.join(__dirname, '..', 'config', `config.${mode}.js`);
const publicPath = path.join(__dirname, '..', 'public', 'config.js');

fs.copyFile(configPath, publicPath, (err) => {
  if (err) throw err;
  console.log('source was copied to destination');
});


// use cra's env loading settings (https://create-react-app.dev/docs/adding-custom-environment-variables/)
// for example 'staging' NODE_ENV loads '.env.staging' then 'env.staging.local', etc
require('react-scripts/config/env'); // eslint-disable-line

cp.spawn(npxCmd, ['react-scripts', 'build'], { stdio: 'inherit' })
  .on('exit', process.exit);
