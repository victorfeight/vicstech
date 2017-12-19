#!/usr/bin/env bash
set -e # halt script on error

nvm install 4.7
npm install flatmarket-cli
npm install flatmarket-theme-bananas
./node_modules/.bin/flatmarket -c \
	./node_modules/flatmarket-theme-bananas/index.jsx \
	-d pay ./src/flatmarket.json
