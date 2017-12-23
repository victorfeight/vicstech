#!/usr/bin/env bash
set -e # halt script on error

yarn install --ignore-engines --modules-folder ./_assets/yarn
bundle exec jekyll build
