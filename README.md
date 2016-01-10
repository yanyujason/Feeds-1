## [Feeds](https://github.com/litongxin/Feeds/)[![Build Status](https://travis-ci.org/litongxin/Feeds.svg?branch=master)](https://travis-ci.org/litongxin/Feeds)

[![Join the chat at https://gitter.im/litongxin/Feeds](https://badges.gitter.im/litongxin/Feeds.svg)](https://gitter.im/litongxin/Feeds?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### This is an awesome feed reader, use this app to manage your feeds.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

bash

$ git clone https://github.com/litongxin/Feeds.git
$ cd Feeds

$ npm install && npm start

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

### How to run unit test

Use jest test framework for my feeds
$gulp jest

### How to start and develop app locally

$npm start or $gulp start

After running gulp start, you can use watch task to apply the changes ASAP

$gulp watch

$npm run startApp

=======
### How to mock api locally

$npm run mockApi

After running npm run mockApi, make sure set _var hostname = "localhost:4000";_ in FeedRequestBuilder.js

### How to build package

Run below commands in iterm to install package
$ npm install electron-packager --save-dev
$ npm install electron-packager -g
// use sudo if got permission issue

Run below command to build app 
$ electron-packager . Feeds --platform=darwin --arch=x64 --version=0.28.2
// Packaging app for platform darwin x64 using electron v0.28.2

// if the app already there, append "--overwrite=force" in the command line

### Trouble shooting
1. If the test didn't run successfully, upgrade to node 4 (run brew update first)
