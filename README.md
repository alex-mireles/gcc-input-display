# gcc-input-display

Currently only works with P+ 2.11 Dolphin. I had to make some workaround edits to Bird's fork of Ishiiruka to get this to work.

1) Enable "Write Gamecube Controller Inputs to File" under Controller Config in Dolphin.
2) Start up a game with Dolphin, then run gcc-input-display.exe and click on File Path.
3) Open 'GCCinputs.bin', which should be located in the same folder as your Dolphin.exe.
4) You're all set!

The input reader will remember where the file is located, so no need to set the File Path again, unless you move Dolphin.

Dolphin will write to 'GCCinputs.bin' at 60Hz. The input reader reads from the same file, also at 60Hz.

For best results, place Dolphin on an SSD. Enabling "Write Gamecube Controller Inputs to File" may cause performance issues if Dolphin is located on an HDD.
