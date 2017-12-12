#!/usr/bin/env bash
set -e # halt script on error

# Build Site
yarn install --modules-folder ./_assets/yarn
./node_modules/flatmarket-cli/bin/flatmarket -c \
	./node_modules/flatmarket-cli/node_modules/flatmarket-theme-bananas/index.jsx \
	-d pay ./src/flatmarket.json
bundle exec jekyll build
