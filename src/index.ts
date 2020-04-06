import { app, BrowserWindow, ipcMain, dialog, ipcRenderer } from 'electron';
import { InputReader } from './InputReader';
import Store from 'electron-store';
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;

export let mainWindow: BrowserWindow;
const store = new Store();
export let inputsFilePath: string;

app.disableHardwareAcceleration();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 680,
    width: 742,
    minWidth: 370,
    minHeight: 340,
    frame: false,
    show: false,
    backgroundColor: '#21252b',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: process.env.NODE_ENV !== 'development'
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Main program:

  inputsFilePath = store.get('filePath')

  if (inputsFilePath === undefined) {
    mainWindow.webContents.send('file path not set');
  }

  const inputReader = new InputReader();
  inputReader.pollInputsFile();

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('zoom-in', () => {
  let minSizeArray = mainWindow.getMinimumSize();
  let width = minSizeArray[0] + 93;
  let height = minSizeArray[1] + 85;
  mainWindow.setMinimumSize(width, height);

  let currentSizeArray = mainWindow.getSize();
  mainWindow.setSize(currentSizeArray[0], currentSizeArray[1]);
});

ipcMain.on('zoom-out', () => {
  let minSizeArray = mainWindow.getMinimumSize();
  let width = minSizeArray[0] - 93;
  let height = minSizeArray[1] - 85;
  mainWindow.setMinimumSize(width, height);
  
  let currentSizeArray = mainWindow.getSize();
  mainWindow.setSize(currentSizeArray[0], currentSizeArray[1]);
});

ipcMain.on('open-file', () => {
  dialog.showOpenDialog(mainWindow, {
    defaultPath: inputsFilePath,
    filters: [
      { name: 'GCCInputs.bin', extensions: ['bin'] }
    ],
    properties: ['openFile']
  }).then(result => {
    if (result.canceled) {
      return;
    }
    inputsFilePath = result.filePaths[0];
    store.set('filePath', inputsFilePath.toString())
    mainWindow.webContents.send('file path set');
  }).catch(err => {
    console.log(err);
  })
});