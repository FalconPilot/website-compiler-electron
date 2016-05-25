const electron    = require('electron')
const fs          = require('fs')
const path        = require('path')
const package     = require('./package.json')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainwindow

// Application tools

let tools = {
  // Get directories
  "getDirectories" : {
    "name" : "Get Directories",
    "func" : function() {
      return fs.readdirSync(src).filter(function(file) {
        return fs.statSync(path.join(src, file)).isDirectory()
      })
    }
  }
}

// Create windows

function createWindow() {
  mainwindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: package.productName
  })
  mainwindow.loadURL('file://' + __dirname + '/index.html')
  mainwindow.webContents.openDevTools()
  finishLoading()
}

// Finish window loading

function finishLoading() {
  data = new Data()
  mainwindow.rendererSideName = data
  mainwindow.webContents.on('did-finish-load', function() {
    mainwindow.webContents.executeJavaScript('initialize()')
  })
}

// Data object

function Data() {
  this.tools = tools
}

// App functions

app.on('ready', function() {
  createWindow()
})

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
