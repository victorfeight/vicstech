#!/usr/bin/env bash
set -e # halt script on error

npm install --save flatmarket-cli
./node_modules/.bin/flatmarket -c \
	./node_modules/flatmarket-theme-bananas/index.jsx \
	-d pay ./src/flatmarket.json
