#!/bin/bash

rm -f ./dist/goto_gitdiagram.zip

zip -r ./dist/goto_gitdiagram.zip content.js manifest.json icon-32.png icon-128.png

echo "success: goto_gitdiagram.zip"
