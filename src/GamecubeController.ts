import { mainWindow } from './index';

export class GamecubeController {
  a_button: boolean;
  b_button: boolean;
  x_button: boolean;
  y_button: boolean;
  l_trigger: boolean;
  r_trigger: boolean;
  z_button: boolean;
  start_button: boolean;
  d_pad_left: boolean;
  d_pad_right: boolean;
  d_pad_down: boolean;
  d_pad_up: boolean;
  control_stick_x: number;
  control_stick_y: number;
  c_stick_x: number;
  c_stick_y: number;
  l_analog: number;
  r_analog: number;
  port: number;
  enabled: boolean;

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

  a_pressed(): void {
    this.a_button = true;
  }

  a_released(): void {
    this.a_button = false;
  }

  b_pressed(): void {
    this.b_button = true;
  }

  b_released(): void {
    this.b_button = false;
  }

  x_pressed(): void {
    this.x_button = true;
  }

  x_released(): void {
    this.x_button = false;
  }

  y_pressed(): void {
    this.y_button = true;
  }

  y_released(): void {
    this.y_button = false;
  }

  l_pressed(): void {
    this.l_trigger = true;
  }

  l_released(): void {
    this.l_trigger = false;
  }

  r_pressed(): void {
    this.r_trigger = true;
  }

  r_released(): void {
    this.r_trigger = false;
  }

  z_pressed(): void {
    this.z_button = true;
  }

  z_released(): void {
    this.z_button = false;
  }

  d_pad_left_pressed(): void {
    this.d_pad_left = true;
  }

  d_pad_left_released(): void {
    this.d_pad_left = false;
  }

  d_pad_right_pressed(): void {
    this.d_pad_right = true;
  }

  d_pad_right_released(): void {
    this.d_pad_right = false;
  }

  d_pad_down_pressed(): void {
    this.d_pad_down = true;
  }

  d_pad_down_released(): void {
    this.d_pad_down = false;
  }

  d_pad_up_pressed(): void {
    this.d_pad_up = true;
  }

  d_pad_up_released(): void {
    this.d_pad_up = false;
  }

  start_pressed(): void {
    this.start_button = true;
  }

  start_released(): void {
    this.start_button = false;
  }

  pressButtons(pressedButtonsArray: string[]): void {
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

  enable(enabled: boolean): void {
    this.enabled = enabled;
  }

}