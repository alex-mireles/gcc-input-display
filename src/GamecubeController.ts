import { mainWindow } from './index';

export class GamecubeController {
  a_button: Boolean;
  b_button: Boolean;
  x_button: Boolean;
  y_button: Boolean;
  l_trigger: Boolean;
  r_trigger: Boolean;
  z_button: Boolean;
  start_button: Boolean;
  d_pad_left: Boolean;
  d_pad_right: Boolean;
  d_pad_down: Boolean;
  d_pad_up: Boolean;
  control_stick_x: number;
  control_stick_y: number;
  c_stick_x: number;
  c_stick_y: number;
  l_analog: number;
  r_analog: number;
  port: number;

  constructor(port: number) {
    this.a_button = false;
    this.b_button = false;
    this.x_button = false;
    this.y_button = false;
    this.l_trigger = false;
    this.r_trigger = false;
    this.z_button = false;
    this.start_button = false;
    this.d_pad_left = false;
    this.d_pad_right = false;
    this.d_pad_down = false;
    this.d_pad_up = false;
    this.control_stick_x = 127;
    this.control_stick_y = 127;
    this.c_stick_x = 127;
    this.c_stick_y = 127;
    this.l_analog = 0;
    this.r_analog = 0;
    this.port = port;
  }

  a_pressed() {
    if (this.a_button === false)
      console.log('Port ' + this.port + ': A PRESSED');
    this.a_button = true;
  }

  a_released() {
    if (this.a_button === true)
      console.log('Port ' + this.port + ': A RELEASED');
    this.a_button = false;
  }

  b_pressed() {
    if (this.b_button === false)
      console.log('Port ' + this.port + ': B PRESSED');
    this.b_button = true;
  }

  b_released() {
    if (this.b_button === true) 
      console.log('Port ' + this.port + ': B RELEASED');
    this.b_button = false;
  }

  x_pressed() {
    if (this.x_button === false) 
      console.log('Port ' + this.port + ': X PRESSED');
    this.x_button = true;
  }

  x_released() {
    if (this.x_button === true) 
      console.log('Port ' + this.port + ': X RELEASED');
    this.x_button = false;
  }

  y_pressed() {
    if (this.y_button === false) 
      console.log('Port ' + this.port + ': Y PRESSED');
    this.y_button = true;
  }

  y_released() {
    if (this.y_button === true) 
      console.log('Port ' + this.port + ': Y RELEASED');
    this.y_button = false;
  }

  d_pad_left_pressed() {
    if (this.d_pad_left === false) 
      console.log('Port ' + this.port + ': D PAD LEFT PRESSED');
    this.d_pad_left = true;
  }

  d_pad_left_released() {
    if (this.d_pad_left === true) 
      console.log('Port ' + this.port + ': D PAD LEFT RELEASED');
    this.d_pad_left = false;
  }

  d_pad_right_pressed() {
    if (this.d_pad_right === false) 
      console.log('Port ' + this.port + ': D PAD RIGHT PRESSED');
    this.d_pad_right = true;
  }

  d_pad_right_released() {
    if (this.d_pad_right === true) 
      console.log('Port ' + this.port + ': D PAD RIGHT RELEASED');
    this.d_pad_right = false;
  }

  d_pad_down_pressed() {
    if (this.d_pad_down === false) 
      console.log('Port ' + this.port + ': D PAD DOWN PRESSED');
    this.d_pad_down = true;
  }

  d_pad_down_released() {
    if (this.d_pad_down === true) 
      console.log('Port ' + this.port + ': D PAD DOWN RELEASED');
    this.d_pad_down = false;
  }

  d_pad_up_pressed() {
    if (this.d_pad_up === false) 
      console.log('Port ' + this.port + ': D PAD UP PRESSED');
    this.d_pad_up = true;
  }

  d_pad_up_released() {
    if (this.d_pad_up === true) 
      console.log('Port ' + this.port + ': D PAD UP RELEASED');
    this.d_pad_up = false;
  }

  pressButtons(pressedButtonsArray: string[]) {
    if (pressedButtonsArray.includes('A')) {
      this.a_pressed();
    } else {
      this.a_released();
    }

    if (pressedButtonsArray.includes('B')) {
      this.b_pressed();
    } else {
      this.b_released();
    }

    if (pressedButtonsArray.includes('X')) {
      this.x_pressed();
    } else {
      this.x_released();
    }

    if (pressedButtonsArray.includes('Y')) {
      this.y_pressed();
    } else {
      this.y_released();
    }

    if (pressedButtonsArray.includes('D_PAD_LEFT')) {
      this.d_pad_left_pressed();
    } else {
      this.d_pad_left_released();
    }

    if (pressedButtonsArray.includes('D_PAD_RIGHT')) {
      this.d_pad_right_pressed();
    } else {
      this.d_pad_right_released();
    }

    if (pressedButtonsArray.includes('D_PAD_DOWN')) {
      this.d_pad_down_pressed();
    } else {
      this.d_pad_down_released();
    }

    if (pressedButtonsArray.includes('D_PAD_UP')) {
      this.d_pad_up_pressed();
    } else {
      this.d_pad_up_released();
    }

    mainWindow.webContents.send('controller polled', this);
  }

}