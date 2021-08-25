const cp = require('child_process');
const os = require('os');
const fs = require('fs');
const path = require('path');

const npxCmd = os.platform().startsWith('win') ? 'npx.cmd' : 'npx';
const mode = process.argv[2] || 'local';

process.env.NODE_ENV = mode;

// destination.txt will be created or overwritten by default.
const configPath = path.join(__dirname, '..', 'config', `config.${mode}.js`);
const publicPath = path.join(__dirname, '..', 'public', 'config.js');

fs.copyFile(configPath, publicPath, (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});


require('react-scripts/config/env'); // eslint-disable-line

cp.spawn(npxCmd, ['react-scripts', 'start'], { stdio: 'inherit' })
  .on('exit', process.exit);
