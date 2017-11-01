#!/usr/bin/env bash
set -e # halt script on error

bundle exec htmlproofer ./_site --only-4xx --allow-hash-href --assume-extension --check-opengraph --url-ignore "feed.xml"
zip -r website.zip _site

curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $NETLIFYKEY" \
     --data-binary "@website.zip" \
     https://api.netlify.com/api/v1/sites/victorfeight.netlify.com/deploys
