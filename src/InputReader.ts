import { GamecubeController } from './GamecubeController';
var fs = require('fs');

export class InputReader {

  adapter: any;
  endpoint: any;
  controller1: GamecubeController;
  controller2: GamecubeController;
  controller3: GamecubeController;
  controller4: GamecubeController;

  constructor() {
    this.controller1 = new GamecubeController(1);
    this.controller2 = new GamecubeController(2);
    this.controller3 = new GamecubeController(3);
    this.controller4 = new GamecubeController(4);
  }

  pollInputsFile() {

    fs.readFile("D:/Games/Netplay/Project M/git_build/project-plus/Bird's Dolphin Test/GCCInputs.bin", (err: any, data: any) => {

      if (data.length != 37) {
        // Failed to read from file, try again
        setTimeout(() => this.pollInputsFile(), 16.667);
        return;
      }

      // The size of the data buffer is 37 bytes (thanks Dolphin source code)
      // Example data: 21 10 00 00 83 83 85 7b 1c 1d 00 00 00 ...
      // Byte 1 always seems to be 0x21.
      // Port 1: Bytes 2 - 10
      // Port 2: Bytes 11 - 19
      // Port 3: Bytes 20 - 28
      // Port 4: Bytes 29 - 37

      let controller1_byte2 = data[2] >>> 0;
      let controller1_byte3 = data[3] >>> 0;

      let controller2_byte2 = data[11] >>> 0;
      let controller2_byte3 = data[12] >>> 0;

      let controllerOneButtonsArray: string[] = [];
      let controllerTwoButtonsArray: string[] = [];

      // ---- DIGITAL BUTTONS ----
      // BYTE 2
      // A           = 0000 0001
      // B           = 0000 0010
      // X           = 0000 0100
      // Y           = 0000 1000
      // D-pad left  = 0001 0000
      // D-pad right = 0010 0000
      // D-pad down  = 0100 0000
      // D-pad up    = 1000 0000

      if (controller1_byte2 & (1 << 0)) controllerOneButtonsArray.push('A');
      if (controller1_byte2 & (1 << 1)) controllerOneButtonsArray.push('B');
      if (controller1_byte2 & (1 << 2)) controllerOneButtonsArray.push('X');
      if (controller1_byte2 & (1 << 3)) controllerOneButtonsArray.push('Y');
      if (controller1_byte2 & (1 << 4)) controllerOneButtonsArray.push('D_PAD_LEFT');
      if (controller1_byte2 & (1 << 5)) controllerOneButtonsArray.push('D_PAD_RIGHT');
      if (controller1_byte2 & (1 << 6)) controllerOneButtonsArray.push('D_PAD_DOWN');
      if (controller1_byte2 & (1 << 7)) controllerOneButtonsArray.push('D_PAD_UP');

      if (controller2_byte2 & (1 << 0)) controllerTwoButtonsArray.push('A');
      if (controller2_byte2 & (1 << 1)) controllerTwoButtonsArray.push('B');
      if (controller2_byte2 & (1 << 2)) controllerTwoButtonsArray.push('X');
      if (controller2_byte2 & (1 << 3)) controllerTwoButtonsArray.push('Y');
      if (controller2_byte2 & (1 << 4)) controllerTwoButtonsArray.push('D_PAD_LEFT');
      if (controller2_byte2 & (1 << 5)) controllerTwoButtonsArray.push('D_PAD_RIGHT');
      if (controller2_byte2 & (1 << 6)) controllerTwoButtonsArray.push('D_PAD_DOWN');
      if (controller2_byte2 & (1 << 7)) controllerTwoButtonsArray.push('D_PAD_UP');

      // BYTE 3
      // START       = 0000 0001
      // Z           = 0000 0010
      // R           = 0000 0100
      // L           = 0000 1000

      if (controller1_byte3 & (1 << 0)) controllerOneButtonsArray.push('START');
      if (controller1_byte3 & (1 << 1)) controllerOneButtonsArray.push('Z');
      if (controller1_byte3 & (1 << 2)) controllerOneButtonsArray.push('R');
      if (controller1_byte3 & (1 << 3)) controllerOneButtonsArray.push('L');

      
      if (controller2_byte3 & (1 << 0)) controllerTwoButtonsArray.push('START');
      if (controller2_byte3 & (1 << 1)) controllerTwoButtonsArray.push('Z');
      if (controller2_byte3 & (1 << 2)) controllerTwoButtonsArray.push('R');
      if (controller2_byte3 & (1 << 3)) controllerTwoButtonsArray.push('L');

      // ---- ANALOG VALUES ----
      // BYTE 4
      // Control Stick X Value (0 - 255)

      this.controller1.control_stick_x = data[4];
      this.controller2.control_stick_x = data[13];

      // BYTE 5
      // Control Stick Y Value (0 - 255)

      this.controller1.control_stick_y = data[5];
      this.controller2.control_stick_y = data[14];

      // BYTE 6
      // C-Stick X Value (0 - 255)

      this.controller1.c_stick_x = data[6];
      this.controller2.c_stick_x = data[15];

      // BYTE 7
      // C-Stick Y Value (0 - 255)

      this.controller1.c_stick_y = data[7];
      this.controller2.c_stick_y = data[16];

      // BYTE 8
      // L Trigger Analog Value (0 - 255)

      this.controller1.l_analog = data[8];
      this.controller2.l_analog = data[17];

      // BYTE 9
      // R Trigger Analog Value (0 - 255)

      this.controller1.r_analog = data[9];
      this.controller2.r_analog = data[18];

      this.controller1.pressButtons(controllerOneButtonsArray);
      this.controller2.pressButtons(controllerTwoButtonsArray);

      // Poll file at 120Hz
      setTimeout(() => this.pollInputsFile(), 16.667);
    });
  }
}