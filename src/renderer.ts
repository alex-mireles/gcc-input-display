/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
import { GamecubeController } from './GamecubeController';
const { ipcRenderer } = require('electron');

ipcRenderer.on('controller polled', (error: any, controller: GamecubeController) => {
  if (controller.a_button) {
    document.getElementById('port' + controller.port +'-a-button').classList.add('active');
    document.getElementById('port' + controller.port +'-a-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-a-button').classList.remove('active');
    document.getElementById('port' + controller.port +'-a-press-shadow').classList.remove('transition');
  }
  if (controller.b_button) {
    document.getElementById('port' + controller.port +'-b-button').classList.add('active');
    document.getElementById('port' + controller.port +'-b-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-b-button').classList.remove('active');
    document.getElementById('port' + controller.port +'-b-press-shadow').classList.remove('transition');
  }
  if (controller.x_button) {
    document.getElementById('port' + controller.port +'-x-button').classList.add('active');
    document.getElementById('port' + controller.port +'-x-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-x-button').classList.remove('active');
    document.getElementById('port' + controller.port +'-x-press-shadow').classList.remove('transition');
  }
  if (controller.y_button) {
    document.getElementById('port' + controller.port +'-y-button').classList.add('active');
    document.getElementById('port' + controller.port +'-y-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-y-button').classList.remove('active');
    document.getElementById('port' + controller.port +'-y-press-shadow').classList.remove('transition');
  }
  if (controller.l_trigger) {
    document.getElementById('port' + controller.port +'-l-trigger').classList.add('active');
    document.getElementById('port' + controller.port +'-l-analog').classList.add('active');
    document.getElementById('port' + controller.port +'-l-trigger-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-l-trigger').classList.remove('active');
    document.getElementById('port' + controller.port +'-l-analog').classList.remove('active');
    document.getElementById('port' + controller.port +'-l-trigger-shadow').classList.remove('transition');
  }
  if (controller.r_trigger) {
    document.getElementById('port' + controller.port +'-r-trigger').classList.add('active');
    document.getElementById('port' + controller.port +'-r-analog').classList.add('active');
    document.getElementById('port' + controller.port +'-r-trigger-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-r-trigger').classList.remove('active');
    document.getElementById('port' + controller.port +'-r-analog').classList.remove('active');
    document.getElementById('port' + controller.port +'-r-trigger-shadow').classList.remove('transition');
  }
  if (controller.start_button) {
    document.getElementById('port' + controller.port +'-start-button').classList.add('active');
    document.getElementById('port' + controller.port +'-start-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-start-button').classList.remove('active');
    document.getElementById('port' + controller.port +'-start-press-shadow').classList.remove('transition');
  }
  if (controller.z_button) {
    document.getElementById('port' + controller.port +'-z-button').classList.add('active');
    document.getElementById('port' + controller.port +'-z-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-z-button').classList.remove('active');
    document.getElementById('port' + controller.port +'-z-press-shadow').classList.remove('transition');
  }
  if (controller.d_pad_left) {
    document.getElementById('port' + controller.port +'-d-pad-left').classList.add('active');
    document.getElementById('port' + controller.port +'-d-pad-left-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-d-pad-left').classList.remove('active');
    document.getElementById('port' + controller.port +'-d-pad-left-press-shadow').classList.remove('transition');
  }
  if (controller.d_pad_right) {
    document.getElementById('port' + controller.port +'-d-pad-right').classList.add('active');
    document.getElementById('port' + controller.port +'-d-pad-right-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-d-pad-right').classList.remove('active');
    document.getElementById('port' + controller.port +'-d-pad-right-press-shadow').classList.remove('transition');
  }
  if (controller.d_pad_down) {
    document.getElementById('port' + controller.port +'-d-pad-down').classList.add('active');
    document.getElementById('port' + controller.port +'-d-pad-down-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-d-pad-down').classList.remove('active');
    document.getElementById('port' + controller.port +'-d-pad-down-press-shadow').classList.remove('transition');
  }
  if (controller.d_pad_up) {
    document.getElementById('port' + controller.port +'-d-pad-up').classList.add('active');
    document.getElementById('port' + controller.port +'-d-pad-up-press-shadow').classList.add('transition');
  } else {
    document.getElementById('port' + controller.port +'-d-pad-up').classList.remove('active');
    document.getElementById('port' + controller.port +'-d-pad-up-press-shadow').classList.remove('transition');
  }

  let l_analog = controller.l_trigger ? 75 : (controller.l_analog / 255) * 75;
  document.getElementById('port' + controller.port +'-l-analog').style.width = l_analog + "px";

  let r_analog = controller.r_trigger ? 75 : (controller.r_analog / 255) * 75;
  document.getElementById('port' + controller.port +'-r-analog').style.width = r_analog + "px";
  
  let x_position = (70 * (controller.control_stick_x / 255)) - 25;
  let y_position = (70 * (controller.control_stick_y / 255)) - 25;
  document.getElementById('port' + controller.port +'-control-stick').style.left = x_position.toString() + "px";
  document.getElementById('port' + controller.port +'-control-stick').style.bottom = y_position.toString() + "px";

  let rotationY = ((controller.control_stick_x - 127) / 127) * 40;
  let rotationX = ((controller.control_stick_y - 127) / 127) * 40;

  document.getElementById('port' + controller.port +'-control-stick').style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

  x_position = (70 * (controller.c_stick_x / 255)) - 20;
  y_position = (70 * (controller.c_stick_y / 255)) - 20;

  document.getElementById('port' + controller.port +'-c-stick').style.left = x_position.toString() + "px";
  document.getElementById('port' + controller.port +'-c-stick').style.bottom = y_position.toString() + "px";

  rotationY = ((controller.c_stick_x - 127) / 127) * 40;
  rotationX = ((controller.c_stick_y - 127) / 127) * 40;

  document.getElementById('port' + controller.port +'-c-stick').style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});