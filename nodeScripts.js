const shelljs = require('shelljs');
const fs = require('fs');
const env = process.argv[3]; // dev, prod, qa, or local
const path = require('path');
const chalk = require('chalk');

// Constants
const FRONT_END = 'frontend';
const DATA_ENV_FILE_PATH = path.join(__dirname, '/frontend/src/utils/environment.json');
const NODE_MODULES = 'node_modules';
const PACKAGE_LOCK = 'package-lock.json';
const REMOVE = 'rm -rf';
const INSTALL = 'npm install';

const configApp = (() => {
  const log = console.log;
  const err = console.error;
  const red = chalk.red;

  log("Environment: ", env);

  const config = {
    environment: env
  };

  const createEnvFile = data => {
    fs.writeFile('.env', data, (err, data) => {
      if (err) {
        err(red('Not able to create env file'));
      }
      log('Installing packages...');
      shelljs.exec(`cd ${FRONT_END} && ${INSTALL}`);
      log('.env file has successfully created');
    });
  };

  const copyEnvExampleFile = () => {
    fs.readFile('./.env-example', 'utf-8', (err, data) => {
      if (err) {
        err(red('Unable to read the .env-example file'));
      }
      createEnvFile(data);
    });
  };

  const setUpEnvironment = () => {
    if (env === 'qa' || env === 'dev' || env === 'local' || env === 'prod') {
      log('Configuring your environment...');

      copyEnvExampleFile();

      shelljs.exec(`cd ${FRONT_END} && ${REMOVE} ${NODE_MODULES} ${PACKAGE_LOCK}`);

      fs.writeFile(`${DATA_ENV_FILE_PATH}`, JSON.stringify(config), err => {

        err ?
          log(red('Not able to write the data.json file')) :
          log(`Successfully create your ${env} environment`);
      });

    } else {
      log(red(`Please add either local, dev, qa, or prod after 'node nodeScripts.js'`));
      log(red(`Example: 'node nodeScripts.js dev'`));
    }
  };

  // Features
  return {
    start: setUpEnvironment
  };
})();

configApp.start();