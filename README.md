# Footbag Worldwide

This is the public repository for the website Footbag Worldwide. The website can be viewed at http://www.footbagworldwide.com. Please feel free to contribute changes to fix bugs, update media, create features, etc.

## Installation and Running the Project

<ol>
  <li>Download source code</li>
  <li>Install Node.js</li>
  <li>Navigate to the root of the project and run `npm install`</li>
  <li>Run `npm run start` and a browser should be opened to the localhost endpoint. If not, find the endpiont in the console and paste it in a browser</li>
</ol>

## Deploying Changes

Footbag Worldwide is currently hosted using GitHub Pages. The site is deployed to the `master` branch and is pulled from the `docs` folder.

To deploy a new version of the site:

<ol>
  <li>Run `npm run build`</li>
  <li>Delete the `docs` folder</li>
  <li>Rename the `build` folder to `docs`</li>
  <li>Push the changes to `master`</li>
</ol>
