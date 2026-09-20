#!/bin/bash
echo "Building the website..."
npm run build

echo "Deploying to GitHub Pages..."
cd dist
git init
git add .
git commit -m "Manual Deploy"
git push -f https://github.com/uumeet-zade/GreenLabor.git HEAD:gh-pages
cd ..

echo "Deployment Complete!"
