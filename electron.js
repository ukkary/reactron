

/**
 * Scripts for Electron
 */
const electron = require('electron');
const { app, BrowserWindow, Menu, shell, ipcMain, dialog, Notification, Tray } = electron;
const path = require('path');

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  let windows = BrowserWindow.getAllWindows();
  if (windows.length > 0) {
      windows.forEach(i => i.show());
      return;
  }
  console.log(windows.length);
  createWindow();
});

app.on('ready', () => {
  createWindow();
});

app.on('before-quit', () => {
  // console.log('before-quit');
});

function createWindow() {
  if (mainWindow) {
    return;
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 760,
    height: 550,
    resizable: true,
    backgroundColor: '#2e2c29',
    title: 'electron',
  });

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.show();
      mainWindow.focus();
  });

  mainWindow.on('closed', () => {
      mainWindow = null;
      console.log('window closed');
  });

  mainWindow.on('show', () => {
      mainWindow.center();
  });
}