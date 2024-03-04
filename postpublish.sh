#!/bin/bash

# put the "type" field back in the main package.json
cat <<< $(jq '. + { "type": "module" }' package.json) > package.json
# re-indent the package.json
npx prettier --write package.json