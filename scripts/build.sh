#!/usr/bin/env bash
set -e # halt script on error

yarn install --modules-folder ./_assets/yarn
bundle exec jekyll build
