#!/usr/bin/env bash
set -e # halt script on error

yarn install --ignore-flags --modules-folder ./_assets/yarn
bundle exec jekyll build
