#!/bin/bash

# This script is used to automate deploy process
# Execute it to deploy the latest version of the app

# The script will terminate after the first line that fails
set -e

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

echo "Jump to app folder"
cd /opt/tsp-frontend

echo "Setting NodeJS version to $(cat ./.nvmrc)"
nvm use

echo "Pull updates from Git"
git pull
git status

echo "Install dependencies"
yarn

echo "Build the app"
yarn build

echo "Reload start PM2 instances with 0 downtime"
pm2 reload ecosystem.config.js

echo "Save PM2 state"
pm2 save

echo "Show PM2 state"
pm2 ls