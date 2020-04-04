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
  enabled: Boolean;

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
    this.enabled = false;
  }

  a_pressed() {
    this.a_button = true;
  }

  a_released() {
    this.a_button = false;
  }

  b_pressed() {
    this.b_button = true;
  }

  b_released() {
    this.b_button = false;
  }

  x_pressed() {
    this.x_button = true;
  }

  x_released() {
    this.x_button = false;
  }

  y_pressed() {
    this.y_button = true;
  }

  y_released() {
    this.y_button = false;
  }

  l_pressed() {
    this.l_trigger = true;
  }

  l_released() {
    this.l_trigger = false;
  }

  r_pressed() {
    this.r_trigger = true;
  }

  r_released() {
    this.r_trigger = false;
  }

  z_pressed() {
    this.z_button = true;
  }

  z_released() {
    this.z_button = false;
  }

  d_pad_left_pressed() {
    this.d_pad_left = true;
  }

  d_pad_left_released() {
    this.d_pad_left = false;
  }

  d_pad_right_pressed() {
    this.d_pad_right = true;
  }

  d_pad_right_released() {
    this.d_pad_right = false;
  }

  d_pad_down_pressed() {
    this.d_pad_down = true;
  }

  d_pad_down_released() {
    this.d_pad_down = false;
  }

  d_pad_up_pressed() {
    this.d_pad_up = true;
  }

  d_pad_up_released() {
    this.d_pad_up = false;
  }

  start_pressed() {
    this.start_button = true;
  }

  start_released() {
    this.start_button = false;
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

    if (pressedButtonsArray.includes('START')) {
      this.start_pressed();
    } else {
      this.start_released();
    }

    if (pressedButtonsArray.includes('L')) {
      this.l_pressed();
    } else {
      this.l_released();
    }

    if (pressedButtonsArray.includes('R')) {
      this.r_pressed();
    } else {
      this.r_released();
    }

    if (pressedButtonsArray.includes('Z')) {
      this.z_pressed();
    } else {
      this.z_released();
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

  enableOrDisable(enabled: Boolean) {
    if (enabled && !this.enabled) {
      this.enabled = true;
      mainWindow.webContents.send('port' + this.port + ' enabled');
      if (this.port == 2) {
        mainWindow.setSize(680, 300, true);
      }
    } else if (!enabled && this.enabled) {
      this.enabled = false;
      mainWindow.webContents.send('port' + this.port + ' disabled');
      if (this.port == 2) {
        mainWindow.setSize(330, 300, true);
      }
    }
  }

}