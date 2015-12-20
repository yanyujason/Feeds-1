## Feeds

### This is an awesome feed reader, use this app to manage your feeds.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

bash

$ git clone https://git.thoughtworks.net/feeds/Feeds.gi$ cd
 Feeds

$ npm install && npm start

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

### How to build package

Run below commands in iterm to install package
$ npm install electron-packager --save-dev
$ npm install electron-packager -g
// use sudo if got permission issue

Run below command to build app 
$ electron-packager . Feeds --platform=darwin --arch=x64 --version=0.28.2
// Packaging app for platform darwin x64 using electron v0.28.2

// if the app already there, append "--overwrite=force" in the command line