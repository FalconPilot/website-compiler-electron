const electron    = require('electron')
const fs          = require('fs')
const path        = require('path')
const package     = require('./package.json')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainwindow

// Create windows

function createWindow() {
  mainwindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: package.productName
  })
  mainwindow.loadURL('file://' + __dirname + '/index.html')
}

// Get directories

function getDirectories(src) {
  return fs.readdirSync(src).filter(function(file) {
    return fs.statSync(path.join(src, file)).isDirectory()
  })
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
