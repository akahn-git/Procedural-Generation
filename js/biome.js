import * as THREE from 'three';
import * as MATH from './math.js';

// Colors
const black = new THREE.Color('#000000');
const white = new THREE.Color('#FFFFFF');

// Fire Colors

const fire_mountain_0 = new THREE.Color('#330000'); // Dark Red
const fire_mountain_1 = new THREE.Color('#cc3300'); // Mountain Red
const fire_mountain_2 = new THREE.Color('#993300'); // Brownish Red
const fire_mountain_3 = new THREE.Color('#8B0000'); // Saddle Red
const fire_mountain_4 = new THREE.Color('#702814'); // Reddish Brown
const fire_mountain_5 = new THREE.Color('#5c2121'); // Dark Reddish Brown
const fire_mountain_6 = new THREE.Color('#4d4d4d'); // Dark Gray
const fire_mountain_7 = new THREE.Color('#660000'); // Reddish Gray
const fire_mountain_8 = new THREE.Color('#800000'); // Medium Red
const fire_mountain_9 = new THREE.Color('#b30000'); // Light Red
const fire_mountain_10 = new THREE.Color('#ffcccc'); // Pale Pink
const fire_mountain_11 = new THREE.Color('#ff9999'); // Light Pale Red
const fire_mountain_12 = new THREE.Color('#ff6666'); // Light Red
const fire_mountain_13 = new THREE.Color('#ff3333'); // Very Light Red
const fire_mountain_14 = new THREE.Color('#ff0000'); // Bright Red
const fire_mountain_15 = new THREE.Color('#ff3399'); // Bright Reddish Pink

const fire_hill_0 = new THREE.Color('#FFA500'); // Orange
const fire_hill_1 = new THREE.Color('#FFDAB9'); // Peach Puff
const fire_hill_2 = new THREE.Color('#FFCBA4'); // Deep Peach
const fire_hill_3 = new THREE.Color('#FFB347'); // Dark Goldenrod
const fire_hill_4 = new THREE.Color('#FFA07A'); // Light Salmon
const fire_hill_5 = new THREE.Color('#FF8F61'); // Tangerine
const fire_hill_6 = new THREE.Color('#FF7F50'); // Coral
const fire_hill_7 = new THREE.Color('#FF5733'); // Flamingo
const fire_hill_8 = new THREE.Color('#FF4500'); // Orange Red
const fire_hill_9 = new THREE.Color('#FF2400'); // Vibrant Red
const fire_hill_10 = new THREE.Color('#B22222'); // Fire Brick
const fire_hill_11 = new THREE.Color('#8B0000'); // Dark Red
const fire_hill_12 = new THREE.Color('#DC143C'); // Crimson
const fire_hill_13 = new THREE.Color('#FF0000'); // Red
const fire_hill_14 = new THREE.Color('#FF6347'); // Tomato
const fire_hill_15 = new THREE.Color('#FF8C00'); // Dark Orange

const fire_plain_0 = new THREE.Color('#FFE7A0'); // Light Yellow
const fire_plain_1 = new THREE.Color('#FFD77A'); // Pale Yellow
const fire_plain_2 = new THREE.Color('#FFC756'); // Yellow
const fire_plain_3 = new THREE.Color('#FFB831'); // Bright Yellow
const fire_plain_4 = new THREE.Color('#FFA90C'); // Yellow Orange
const fire_plain_5 = new THREE.Color('#FF9518'); // Orange
const fire_plain_6 = new THREE.Color('#FF811F'); // Bright Orange
const fire_plain_7 = new THREE.Color('#FF6E26'); // Light Orange Red
const fire_plain_8 = new THREE.Color('#FF5A2C'); // Orange Red
const fire_plain_9 = new THREE.Color('#FF462F'); // Pale Red
const fire_plain_10 = new THREE.Color('#FF3333'); // Red
const fire_plain_11 = new THREE.Color('#E62E2E'); // Dark Red
const fire_plain_12 = new THREE.Color('#CC2A2A'); // Reddish Brown
const fire_plain_13 = new THREE.Color('#B32626'); // Brown
const fire_plain_14 = new THREE.Color('#991F1F'); // Dark Brown
const fire_plain_15 = new THREE.Color('#801A1A'); // Very Dark Brown

const fire_ocean_0 = new THREE.Color('#FF2400'); // Inferno Red
const fire_ocean_1 = new THREE.Color('#FF6347'); // Tomato
const fire_ocean_2 = new THREE.Color('#FF7F50'); // Coral
const fire_ocean_3 = new THREE.Color('#FF8C00'); // Dark Orange
const fire_ocean_4 = new THREE.Color('#FFA500'); // Orange
const fire_ocean_5 = new THREE.Color('#FFB347'); // Light Orange
const fire_ocean_6 = new THREE.Color('#FFC0CB'); // Pink
const fire_ocean_7 = new THREE.Color('#FFDAB9'); // Peach
const fire_ocean_8 = new THREE.Color('#FFDEAD'); // Navajo White
const fire_ocean_9 = new THREE.Color('#FFA07A'); // Light Salmon
const fire_ocean_10 = new THREE.Color('#FF7F50'); // Coral
const fire_ocean_11 = new THREE.Color('#FF6347'); // Tomato
const fire_ocean_12 = new THREE.Color('#FF4500'); // Fiery Red
const fire_ocean_13 = new THREE.Color('#CD5C5C'); // Indian Red
const fire_ocean_14 = new THREE.Color('#B22222'); // Fire Brick
const fire_ocean_15 = new THREE.Color('#8B0000'); // Dark Red

// Ice Colors
const ice_mountain_0 = new THREE.Color('#D1EEEE'); // Light Cyan
const ice_mountain_1 = new THREE.Color('#BFEFFF'); // Powder Blue
const ice_mountain_2 = new THREE.Color('#ADD8E6'); // Light Blue
const ice_mountain_3 = new THREE.Color('#87CEFA'); // Light Sky Blue
const ice_mountain_4 = new THREE.Color('#87CEEB'); // Sky Blue
const ice_mountain_5 = new THREE.Color('#778899'); // Light Slate Gray
const ice_mountain_6 = new THREE.Color('#A9A9A9'); // Dark Gray
const ice_mountain_7 = new THREE.Color('#C0C0C0'); // Silver
const ice_mountain_8 = new THREE.Color('#D3D3D3'); // Light Gray
const ice_mountain_9 = new THREE.Color('#DCDCDC'); // Gainsboro
const ice_mountain_10 = new THREE.Color('#F0F8FF'); // Alice Blue
const ice_mountain_11 = new THREE.Color('#F5F5F5'); // White Smoke
const ice_mountain_12 = new THREE.Color('#F8F8FF'); // Ghost White
const ice_mountain_13 = new THREE.Color('#FFFFFF'); // White
const ice_mountain_14 = new THREE.Color('#F0FFFF'); // Azure
const ice_mountain_15 = new THREE.Color('#B0C4DE'); // Light Steel Blue

const ice_hill_0 = new THREE.Color('#E0FFFF'); // Light Cyan
const ice_hill_1 = new THREE.Color('#B0E0E6'); // Powder Blue
const ice_hill_2 = new THREE.Color('#87CEFA'); // Light Sky Blue
const ice_hill_3 = new THREE.Color('#00BFFF'); // Deep Sky Blue
const ice_hill_4 = new THREE.Color('#1E90FF'); // Dodger Blue
const ice_hill_5 = new THREE.Color('#4169E1'); // Royal Blue
const ice_hill_6 = new THREE.Color('#0000CD'); // Medium Blue
const ice_hill_7 = new THREE.Color('#00008B'); // Dark Blue
const ice_hill_8 = new THREE.Color('#000080'); // Navy
const ice_hill_9 = new THREE.Color('#191970'); // Midnight Blue
const ice_hill_10 = new THREE.Color('#1C2331'); // Ebony
const ice_hill_11 = new THREE.Color('#778899'); // Light Slate Gray
const ice_hill_12 = new THREE.Color('#708090'); // Slate Gray
const ice_hill_13 = new THREE.Color('#696969'); // Dim Gray
const ice_hill_14 = new THREE.Color('#808080'); // Gray
const ice_hill_15 = new THREE.Color('#F8F8FF'); // Ghost White

const ice_plain_0 = new THREE.Color('#C9DEF2'); // Pale Blue
const ice_plain_1 = new THREE.Color('#A5C5D9'); // Sky Blue
const ice_plain_2 = new THREE.Color('#82ADC4'); // Steel Blue
const ice_plain_3 = new THREE.Color('#5E96AE'); // Air Force Blue
const ice_plain_4 = new THREE.Color('#367588'); // Teal Blue
const ice_plain_5 = new THREE.Color('#175E6B'); // Dark Turquoise
const ice_plain_6 = new THREE.Color('#154B5F'); // Dark Blue
const ice_plain_7 = new THREE.Color('#103E54'); // Prussian Blue
const ice_plain_8 = new THREE.Color('#0C2E3D'); // Dark Slate Blue
const ice_plain_9 = new THREE.Color('#08202B'); // Dark Midnight Blue
const ice_plain_10 = new THREE.Color('#0D1E24'); // Dark Navy
const ice_plain_11 = new THREE.Color('#212D40'); // Dark Slate Gray
const ice_plain_12 = new THREE.Color('#4B5F71'); // Slate Gray
const ice_plain_13 = new THREE.Color('#7D8A99'); // Gray Blue
const ice_plain_14 = new THREE.Color('#B8C2CC'); // Light Gray
const ice_plain_15 = new THREE.Color('#F2F5F7'); // White Smoke

const ice_ocean_0 = new THREE.Color('#003366'); // Dark Blue
const ice_ocean_1 = new THREE.Color('#6699CC'); // Blue Gray
const ice_ocean_2 = new THREE.Color('#87CEEB'); // Sky Blue
const ice_ocean_3 = new THREE.Color('#ADD8E6'); // Light Blue
const ice_ocean_4 = new THREE.Color('#B0C4DE'); // Light Steel Blue
const ice_ocean_5 = new THREE.Color('#BFEFFF'); // Powder Blue
const ice_ocean_6 = new THREE.Color('#E0FFFF'); // Light Cyan
const ice_ocean_7 = new THREE.Color('#F0F8FF'); // Alice Blue
const ice_ocean_8 = new THREE.Color('#FFFFFF'); // White
const ice_ocean_9 = new THREE.Color('#F0FFFF'); // Azure
const ice_ocean_10 = new THREE.Color('#F5F5F5'); // Beige
const ice_ocean_11 = new THREE.Color('#F0FFF0'); // Honeydew
const ice_ocean_12 = new THREE.Color('#F0FFFF'); // Light Cyan
const ice_ocean_13 = new THREE.Color('#FFFFFF'); // White
const ice_ocean_14 = new THREE.Color('#F5F5F5'); // White Smoke
const ice_ocean_15 = new THREE.Color('#F0F8FF'); // Ghost White

// Earth Colors
const earth_mountain_0 = new THREE.Color('#003300'); // Dark Green
const earth_mountain_1 = new THREE.Color('#00cc66'); // Mountain Green
const earth_mountain_2 = new THREE.Color('#996633'); // Brownish Gray
const earth_mountain_3 = new THREE.Color('#8B4513'); // Saddle Brown
const earth_mountain_4 = new THREE.Color('#704214'); // Brown
const earth_mountain_5 = new THREE.Color('#5c3a21'); // Dark Brown
const earth_mountain_6 = new THREE.Color('#4d4d4d'); // Dark Gray
const earth_mountain_7 = new THREE.Color('#666666'); // Gray
const earth_mountain_8 = new THREE.Color('#808080'); // Medium Gray
const earth_mountain_9 = new THREE.Color('#999999'); // Light Gray
const earth_mountain_10 = new THREE.Color('#b3b3b3'); // Pale Gray
const earth_mountain_11 = new THREE.Color('#cccccc'); // Light Pale Gray
const earth_mountain_12 = new THREE.Color('#d9d9d9'); // Lightest Pale Gray
const earth_mountain_13 = new THREE.Color('#e6e6e6'); // Very Light Gray
const earth_mountain_14 = new THREE.Color('#f2f2f2'); // Almost White
const earth_mountain_15 = new THREE.Color('#e6e6e6'); // Light Gray

const earth_hill_0 = new THREE.Color('#1B4D3E'); // Dark Green
const earth_hill_1 = new THREE.Color('#2B6447'); // Green
const earth_hill_2 = new THREE.Color('#3C7C50'); // Forest Green
const earth_hill_3 = new THREE.Color('#4D9359'); // Medium Green
const earth_hill_4 = new THREE.Color('#5DA65D'); // Yellow Green
const earth_hill_5 = new THREE.Color('#6FB35E'); // Olive Green
const earth_hill_6 = new THREE.Color('#80C261'); // Chartreuse Green
const earth_hill_7 = new THREE.Color('#8CD96B'); // Light Green
const earth_hill_8 = new THREE.Color('#A5D884'); // Pale Green
const earth_hill_9 = new THREE.Color('#C5E5A5'); // Lightest Green
const earth_hill_10 = new THREE.Color('#DED8A9'); // Tan
const earth_hill_11 = new THREE.Color('#C7B198'); // Brown
const earth_hill_12 = new THREE.Color('#AA8D79'); // Light Brown
const earth_hill_13 = new THREE.Color('#8C695B'); // Dark Brown
const earth_hill_14 = new THREE.Color('#6F4D3E'); // Brownish Red
const earth_hill_15 = new THREE.Color('#4F3226'); // Dark Brownish Red

const earth_plain_0 = new THREE.Color('#92c663'); // Light Spring Green
const earth_plain_1 = new THREE.Color('#7bbf5b'); // Light Olive Green
const earth_plain_2 = new THREE.Color('#64b653'); // Light Green
const earth_plain_3 = new THREE.Color('#4aad4c'); // Pale Green
const earth_plain_4 = new THREE.Color('#3d9e44'); // Medium Sea Green
const earth_plain_5 = new THREE.Color('#368e3b'); // Sea Green
const earth_plain_6 = new THREE.Color('#2e7d33'); // Dark Sea Green
const earth_plain_7 = new THREE.Color('#296c2b'); // Medium Aquamarine
const earth_plain_8 = new THREE.Color('#245c23'); // Forest Green
const earth_plain_9 = new THREE.Color('#1f4b1b'); // Dark Olive Green
const earth_plain_10 = new THREE.Color('#1a3b14'); // Hunter Green
const earth_plain_11 = new THREE.Color('#162c0e'); // Dark Green
const earth_plain_12 = new THREE.Color('#121d08'); // Deep Green
const earth_plain_13 = new THREE.Color('#0d0d02'); // Very Dark Green
const earth_plain_14 = new THREE.Color('#0a0a01'); // Blackish Green
const earth_plain_15 = new THREE.Color('#050501'); // Black Green

const earth_ocean_0 = new THREE.Color('#006699'); // Ocean Blue
const earth_ocean_1 = new THREE.Color('#0077be'); // Bright Blue
const earth_ocean_2 = new THREE.Color('#0088cc'); // Sky Blue
const earth_ocean_3 = new THREE.Color('#0099cc'); // Deep Blue
const earth_ocean_4 = new THREE.Color('#00aaff'); // Electric Blue
const earth_ocean_5 = new THREE.Color('#33bbff'); // Light Blue
const earth_ocean_6 = new THREE.Color('#66ccff'); // Pale Blue
const earth_ocean_7 = new THREE.Color('#99ddff'); // Baby Blue
const earth_ocean_8 = new THREE.Color('#ccf2ff'); // Very Light Blue
const earth_ocean_9 = new THREE.Color('#faf0e6'); // Linen
const earth_ocean_10 = new THREE.Color('#f5deb3'); // Wheat
const earth_ocean_11 = new THREE.Color('#f0eada'); // Beige
const earth_ocean_12 = new THREE.Color('#ebe5d9'); // Light Beige
const earth_ocean_13 = new THREE.Color('#e6e2d3'); // Pale Beige
const earth_ocean_14 = new THREE.Color('#e1dbcc'); // Ivory
const earth_ocean_15 = new THREE.Color('#dbd5c6'); // Pearl

// Water Colors

const water_mountain_0 = new THREE.Color('#000033'); // Dark Blue
const water_mountain_1 = new THREE.Color('#3399cc'); // Mountain Blue
const water_mountain_2 = new THREE.Color('#336699'); // Blueish Gray
const water_mountain_3 = new THREE.Color('#000080'); // Saddle Blue
const water_mountain_4 = new THREE.Color('#1f4e5f'); // Bluish Gray
const water_mountain_5 = new THREE.Color('#2d3e4f'); // Dark Bluish Gray
const water_mountain_6 = new THREE.Color('#4d4d4d'); // Dark Gray
const water_mountain_7 = new THREE.Color('#2c3e50'); // Bluish Gray
const water_mountain_8 = new THREE.Color('#2980b9'); // Medium Blue
const water_mountain_9 = new THREE.Color('#3498db'); // Light Blue
const water_mountain_10 = new THREE.Color('#b3d9ff'); // Pale Blue
const water_mountain_11 = new THREE.Color('#99ccff'); // Light Pale Blue
const water_mountain_12 = new THREE.Color('#66b2ff'); // Light Blue
const water_mountain_13 = new THREE.Color('#3399ff'); // Very Light Blue
const water_mountain_14 = new THREE.Color('#0066ff'); // Bright Blue
const water_mountain_15 = new THREE.Color('#99ccff'); // Baby Blue

const water_hill_0 = new THREE.Color('#003366'); // Dark Blue
const water_hill_1 = new THREE.Color('#004080'); // Blue
const water_hill_2 = new THREE.Color('#0055A4'); // Royal Blue
const water_hill_3 = new THREE.Color('#0066CC'); // Medium Blue
const water_hill_4 = new THREE.Color('#0077E6'); // Sky Blue
const water_hill_5 = new THREE.Color('#0088FF'); // Electric Blue
const water_hill_6 = new THREE.Color('#00BFFF'); // Deep Sky Blue
const water_hill_7 = new THREE.Color('#66CCFF'); // Light Blue
const water_hill_8 = new THREE.Color('#99CCFF'); // Baby Blue
const water_hill_9 = new THREE.Color('#CCE6FF'); // Pale Blue
const water_hill_10 = new THREE.Color('#B2FFFF'); // Light Turquoise
const water_hill_11 = new THREE.Color('#80FFFF'); // Turquoise
const water_hill_12 = new THREE.Color('#4DFFFF'); // Electric Turquoise
const water_hill_13 = new THREE.Color('#00FFFF'); // Cyan
const water_hill_14 = new THREE.Color('#008080'); // Teal
const water_hill_15 = new THREE.Color('#005959'); // Dark Teal

const water_plain_0 = new THREE.Color('#6ea8da'); // Sky Blue
const water_plain_1 = new THREE.Color('#5d9edc'); // Cornflower Blue
const water_plain_2 = new THREE.Color('#4d95de'); // Steel Blue
const water_plain_3 = new THREE.Color('#3d8bdf'); // Dodger Blue
const water_plain_4 = new THREE.Color('#2d82e1'); // Deep Sky Blue
const water_plain_5 = new THREE.Color('#1d79e3'); // Royal Blue
const water_plain_6 = new THREE.Color('#0d6fe4'); // Medium Blue
const water_plain_7 = new THREE.Color('#0065e6'); // Bright Blue
const water_plain_8 = new THREE.Color('#005be5'); // Electric Blue
const water_plain_9 = new THREE.Color('#0051e4'); // Sapphire Blue
const water_plain_10 = new THREE.Color('#0047e3'); // Dark Blue
const water_plain_11 = new THREE.Color('#003de2'); // Navy Blue
const water_plain_12 = new THREE.Color('#0033e0'); // Midnight Blue
const water_plain_13 = new THREE.Color('#0029df'); // Dark Midnight Blue
const water_plain_14 = new THREE.Color('#001edf'); // Deep Blue
const water_plain_15 = new THREE.Color('#0014de'); // Very Deep Blue

const water_ocean_0 = new THREE.Color('#002080'); // Dark Blue
const water_ocean_1 = new THREE.Color('#0033cc'); // Royal Blue
const water_ocean_2 = new THREE.Color('#0047b3'); // Sapphire Blue
const water_ocean_3 = new THREE.Color('#0059b3'); // Oceanic Blue
const water_ocean_4 = new THREE.Color('#0066cc'); // Sky Blue
const water_ocean_5 = new THREE.Color('#0077be'); // Bright Blue
const water_ocean_6 = new THREE.Color('#0088cc'); // Electric Blue
const water_ocean_7 = new THREE.Color('#0099cc'); // Deep Blue
const water_ocean_8 = new THREE.Color('#00bfff'); // Deep Sky Blue
const water_ocean_9 = new THREE.Color('#334c3b'); // Dark Teal
const water_ocean_10 = new THREE.Color('#427a6a'); // Teal
const water_ocean_11 = new THREE.Color('#5aa68d'); // Light Teal
const water_ocean_12 = new THREE.Color('#7ec4b5'); // Pastel Blue
const water_ocean_13 = new THREE.Color('#a0d7d1'); // Seafoam
const water_ocean_14 = new THREE.Color('#c3e8e3'); // Pale Blue Green
const water_ocean_15 = new THREE.Color('#e6ffee'); // Light Cyan

// uniforms
const uniforms = {
  // Fire terrain colors
  uFireMountain0: { value: fire_mountain_0},
  uFireMountain1: { value: fire_mountain_1},
  uFireMountain2: { value: fire_mountain_2},
  uFireMountain3: { value: fire_mountain_3},
  uFireMountain4: { value: fire_mountain_4},
  uFireMountain5: { value: fire_mountain_5},
  uFireMountain6: { value: fire_mountain_6},
  uFireMountain7: { value: fire_mountain_7},
  uFireMountain8: { value: fire_mountain_8},
  uFireMountain9: { value: fire_mountain_9},
  uFireMountain10: { value: fire_mountain_10},
  uFireMountain11: { value: fire_mountain_11},
  uFireMountain12: { value: fire_mountain_12},
  uFireMountain13: { value: fire_mountain_13},
  uFireMountain14: { value: fire_mountain_14},
  uFireMountain15: { value: fire_mountain_15},

  uFireHill0: { value: fire_hill_0},
  uFireHill1: { value: fire_hill_1},
  uFireHill2: { value: fire_hill_2},
  uFireHill3: { value: fire_hill_3},
  uFireHill4: { value: fire_hill_4},
  uFireHill5: { value: fire_hill_5},
  uFireHill6: { value: fire_hill_6},
  uFireHill7: { value: fire_hill_7},
  uFireHill8: { value: fire_hill_8},
  uFireHill9: { value: fire_hill_9},
  uFireHill10: { value: fire_hill_10},
  uFireHill11: { value: fire_hill_11},
  uFireHill12: { value: fire_hill_12},
  uFireHill13: { value: fire_hill_13},
  uFireHill14: { value: fire_hill_14},
  uFireHill15: { value: fire_hill_15},

  uFirePlain0: { value: fire_plain_0},
  uFirePlain1: { value: fire_plain_1},
  uFirePlain2: { value: fire_plain_2},
  uFirePlain3: { value: fire_plain_3},
  uFirePlain4: { value: fire_plain_4},
  uFirePlain5: { value: fire_plain_5},
  uFirePlain6: { value: fire_plain_6},
  uFirePlain7: { value: fire_plain_7},
  uFirePlain8: { value: fire_plain_8},
  uFirePlain9: { value: fire_plain_9},
  uFirePlain10: { value: fire_plain_10},
  uFirePlain11: { value: fire_plain_11},
  uFirePlain12: { value: fire_plain_12},
  uFirePlain13: { value: fire_plain_13},
  uFirePlain14: { value: fire_plain_14},
  uFirePlain15: { value: fire_plain_15},

  uFireOcean0: { value: fire_ocean_0},
  uFireOcean1: { value: fire_ocean_1},
  uFireOcean2: { value: fire_ocean_2},
  uFireOcean3: { value: fire_ocean_3},
  uFireOcean4: { value: fire_ocean_4},
  uFireOcean5: { value: fire_ocean_5},
  uFireOcean6: { value: fire_ocean_6},
  uFireOcean7: { value: fire_ocean_7},
  uFireOcean8: { value: fire_ocean_8},
  uFireOcean9: { value: fire_ocean_9},
  uFireOcean10: { value: fire_ocean_10},
  uFireOcean11: { value: fire_ocean_11},
  uFireOcean12: { value: fire_ocean_12},
  uFireOcean13: { value: fire_ocean_13},
  uFireOcean14: { value: fire_ocean_14},
  uFireOcean15: { value: fire_ocean_15},
  
  // Ice terrain colors
  uIceMountain0: { value: ice_mountain_0},
  uIceMountain1: { value: ice_mountain_1},
  uIceMountain2: { value: ice_mountain_2},
  uIceMountain3: { value: ice_mountain_3},
  uIceMountain4: { value: ice_mountain_4},
  uIceMountain5: { value: ice_mountain_5},
  uIceMountain6: { value: ice_mountain_6},
  uIceMountain7: { value: ice_mountain_7},
  uIceMountain8: { value: ice_mountain_8},
  uIceMountain9: { value: ice_mountain_9},
  uIceMountain10: { value: ice_mountain_10},
  uIceMountain11: { value: ice_mountain_11},
  uIceMountain12: { value: ice_mountain_12},
  uIceMountain13: { value: ice_mountain_13},
  uIceMountain14: { value: ice_mountain_14},
  uIceMountain15: { value: ice_mountain_15},

  uIceHill0: { value: ice_hill_0},
  uIceHill1: { value: ice_hill_1},
  uIceHill2: { value: ice_hill_2},
  uIceHill3: { value: ice_hill_3},
  uIceHill4: { value: ice_hill_4},
  uIceHill5: { value: ice_hill_5},
  uIceHill6: { value: ice_hill_6},
  uIceHill7: { value: ice_hill_7},
  uIceHill8: { value: ice_hill_8},
  uIceHill9: { value: ice_hill_9},
  uIceHill10: { value: ice_hill_10},
  uIceHill11: { value: ice_hill_11},
  uIceHill12: { value: ice_hill_12},
  uIceHill13: { value: ice_hill_13},
  uIceHill14: { value: ice_hill_14},
  uIceHill15: { value: ice_hill_15},

  uIcePlain0: { value: ice_plain_0},
  uIcePlain1: { value: ice_plain_1},
  uIcePlain2: { value: ice_plain_2},
  uIcePlain3: { value: ice_plain_3},
  uIcePlain4: { value: ice_plain_4},
  uIcePlain5: { value: ice_plain_5},
  uIcePlain6: { value: ice_plain_6},
  uIcePlain7: { value: ice_plain_7},
  uIcePlain8: { value: ice_plain_8},
  uIcePlain9: { value: ice_plain_9},
  uIcePlain10: { value: ice_plain_10},
  uIcePlain11: { value: ice_plain_11},
  uIcePlain12: { value: ice_plain_12},
  uIcePlain13: { value: ice_plain_13},
  uIcePlain14: { value: ice_plain_14},
  uIcePlain15: { value: ice_plain_15},

  uIceOcean0: { value: ice_ocean_0},
  uIceOcean1: { value: ice_ocean_1},
  uIceOcean2: { value: ice_ocean_2},
  uIceOcean3: { value: ice_ocean_3},
  uIceOcean4: { value: ice_ocean_4},
  uIceOcean5: { value: ice_ocean_5},
  uIceOcean6: { value: ice_ocean_6},
  uIceOcean7: { value: ice_ocean_7},
  uIceOcean8: { value: ice_ocean_8},
  uIceOcean9: { value: ice_ocean_9},
  uIceOcean10: { value: ice_ocean_10},
  uIceOcean11: { value: ice_ocean_11},
  uIceOcean12: { value: ice_ocean_12},
  uIceOcean13: { value: ice_ocean_13},
  uIceOcean14: { value: ice_ocean_14},
  uIceOcean15: { value: ice_ocean_15},

  // Earth terrain colors
  uEarthMountain0: { value: earth_mountain_0},
  uEarthMountain1: { value: earth_mountain_1},
  uEarthMountain2: { value: earth_mountain_2},
  uEarthMountain3: { value: earth_mountain_3},
  uEarthMountain4: { value: earth_mountain_4},
  uEarthMountain5: { value: earth_mountain_5},
  uEarthMountain6: { value: earth_mountain_6},
  uEarthMountain7: { value: earth_mountain_7},
  uEarthMountain8: { value: earth_mountain_8},
  uEarthMountain9: { value: earth_mountain_9},
  uEarthMountain10: { value: earth_mountain_10},
  uEarthMountain11: { value: earth_mountain_11},
  uEarthMountain12: { value: earth_mountain_12},
  uEarthMountain13: { value: earth_mountain_13},
  uEarthMountain14: { value: earth_mountain_14},
  uEarthMountain15: { value: earth_mountain_15},

  uEarthHill0: { value: earth_hill_0},
  uEarthHill1: { value: earth_hill_1},
  uEarthHill2: { value: earth_hill_2},
  uEarthHill3: { value: earth_hill_3},
  uEarthHill4: { value: earth_hill_4},
  uEarthHill5: { value: earth_hill_5},
  uEarthHill6: { value: earth_hill_6},
  uEarthHill7: { value: earth_hill_7},
  uEarthHill8: { value: earth_hill_8},
  uEarthHill9: { value: earth_hill_9},
  uEarthHill10: { value: earth_hill_10},
  uEarthHill11: { value: earth_hill_11},
  uEarthHill12: { value: earth_hill_12},
  uEarthHill13: { value: earth_hill_13},
  uEarthHill14: { value: earth_hill_14},
  uEarthHill15: { value: earth_hill_15},

  uEarthPlain0: { value: earth_plain_0},
  uEarthPlain1: { value: earth_plain_1},
  uEarthPlain2: { value: earth_plain_2},
  uEarthPlain3: { value: earth_plain_3},
  uEarthPlain4: { value: earth_plain_4},
  uEarthPlain5: { value: earth_plain_5},
  uEarthPlain6: { value: earth_plain_6},
  uEarthPlain7: { value: earth_plain_7},
  uEarthPlain8: { value: earth_plain_8},
  uEarthPlain9: { value: earth_plain_9},
  uEarthPlain10: { value: earth_plain_10},
  uEarthPlain11: { value: earth_plain_11},
  uEarthPlain12: { value: earth_plain_12},
  uEarthPlain13: { value: earth_plain_13},
  uEarthPlain14: { value: earth_plain_14},
  uEarthPlain15: { value: earth_plain_15},

  uEarthOcean0: { value: earth_ocean_0},
  uEarthOcean1: { value: earth_ocean_1},
  uEarthOcean2: { value: earth_ocean_2},
  uEarthOcean3: { value: earth_ocean_3},
  uEarthOcean4: { value: earth_ocean_4},
  uEarthOcean5: { value: earth_ocean_5},
  uEarthOcean6: { value: earth_ocean_6},
  uEarthOcean7: { value: earth_ocean_7},
  uEarthOcean8: { value: earth_ocean_8},
  uEarthOcean9: { value: earth_ocean_9},
  uEarthOcean10: { value: earth_ocean_10},
  uEarthOcean11: { value: earth_ocean_11},
  uEarthOcean12: { value: earth_ocean_12},
  uEarthOcean13: { value: earth_ocean_13},
  uEarthOcean14: { value: earth_ocean_14},
  uEarthOcean15: { value: earth_ocean_15},

  // Water terrain colors
  uWaterMountain0: { value: water_mountain_0},
  uWaterMountain1: { value: water_mountain_1},
  uWaterMountain2: { value: water_mountain_2},  
  uWaterMountain3: { value: water_mountain_3},
  uWaterMountain4: { value: water_mountain_4},
  uWaterMountain5: { value: water_mountain_5},
  uWaterMountain6: { value: water_mountain_6},
  uWaterMountain7: { value: water_mountain_7},
  uWaterMountain8: { value: water_mountain_8},
  uWaterMountain9: { value: water_mountain_9},
  uWaterMountain10: { value: water_mountain_10},
  uWaterMountain11: { value: water_mountain_11},
  uWaterMountain12: { value: water_mountain_12},
  uWaterMountain13: { value: water_mountain_13},
  uWaterMountain14: { value: water_mountain_14},
  uWaterMountain15: { value: water_mountain_15},

  uWaterHill0: { value: water_hill_0},
  uWaterHill1: { value: water_hill_1},
  uWaterHill2: { value: water_hill_2},
  uWaterHill3: { value: water_hill_3},
  uWaterHill4: { value: water_hill_4},
  uWaterHill5: { value: water_hill_5},
  uWaterHill6: { value: water_hill_6},
  uWaterHill7: { value: water_hill_7},
  uWaterHill8: { value: water_hill_8},
  uWaterHill9: { value: water_hill_9},
  uWaterHill10: { value: water_hill_10},
  uWaterHill11: { value: water_hill_11},
  uWaterHill12: { value: water_hill_12},
  uWaterHill13: { value: water_hill_13},
  uWaterHill14: { value: water_hill_14},
  uWaterHill15: { value: water_hill_15},

  uWaterPlain0: { value: water_plain_0},
  uWaterPlain1: { value: water_plain_1},
  uWaterPlain2: { value: water_plain_2},
  uWaterPlain3: { value: water_plain_3},
  uWaterPlain4: { value: water_plain_4},
  uWaterPlain5: { value: water_plain_5},
  uWaterPlain6: { value: water_plain_6},
  uWaterPlain7: { value: water_plain_7},
  uWaterPlain8: { value: water_plain_8},
  uWaterPlain9: { value: water_plain_9},
  uWaterPlain10: { value: water_plain_10},
  uWaterPlain11: { value: water_plain_11},
  uWaterPlain12: { value: water_plain_12},
  uWaterPlain13: { value: water_plain_13},
  uWaterPlain14: { value: water_plain_14},
  uWaterPlain15: { value: water_plain_15},

  uWaterOcean0: { value: water_ocean_0},
  uWaterOcean1: { value: water_ocean_1},
  uWaterOcean2: { value: water_ocean_2},
  uWaterOcean3: { value: water_ocean_3},
  uWaterOcean4: { value: water_ocean_4},
  uWaterOcean5: { value: water_ocean_5},
  uWaterOcean6: { value: water_ocean_6},
  uWaterOcean7: { value: water_ocean_7},
  uWaterOcean8: { value: water_ocean_8},
  uWaterOcean9: { value: water_ocean_9},
  uWaterOcean10: { value: water_ocean_10},
  uWaterOcean11: { value: water_ocean_11},
  uWaterOcean12: { value: water_ocean_12},
  uWaterOcean13: { value: water_ocean_13},
  uWaterOcean14: { value: water_ocean_14},
  uWaterOcean15: { value: water_ocean_15},

};

export function fireBiome(api, terrainNum, minHeight, sectionSize) {
  //console.log("In fireBiome function with terrainNum: " + terrainNum); 
  const groundMaterial = new THREE.ShaderMaterial({
    wireframe: api.WireFrame,
    uniforms: uniforms,
    vertexShader: `
      varying vec3 pos;

      void main() {
        pos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 pos;

      float minHeight;
      float sectionSize;
      int terrainNum;

      uniform vec3 uFireMountain0;
      uniform vec3 uFireMountain1;
      uniform vec3 uFireMountain2;
      uniform vec3 uFireMountain3;
      uniform vec3 uFireMountain4;
      uniform vec3 uFireMountain5;
      uniform vec3 uFireMountain6;
      uniform vec3 uFireMountain7;
      uniform vec3 uFireMountain8;
      uniform vec3 uFireMountain9;
      uniform vec3 uFireMountain10;
      uniform vec3 uFireMountain11;
      uniform vec3 uFireMountain12;
      uniform vec3 uFireMountain13;
      uniform vec3 uFireMountain14;
      uniform vec3 uFireMountain15;

      uniform vec3 uFireHill0;
      uniform vec3 uFireHill1;
      uniform vec3 uFireHill2;
      uniform vec3 uFireHill3;
      uniform vec3 uFireHill4;
      uniform vec3 uFireHill5;
      uniform vec3 uFireHill6;
      uniform vec3 uFireHill7;
      uniform vec3 uFireHill8;
      uniform vec3 uFireHill9;
      uniform vec3 uFireHill10;
      uniform vec3 uFireHill11;
      uniform vec3 uFireHill12;
      uniform vec3 uFireHill13;
      uniform vec3 uFireHill14;
      uniform vec3 uFireHill15;

      uniform vec3 uFirePlain0;
      uniform vec3 uFirePlain1;
      uniform vec3 uFirePlain2;
      uniform vec3 uFirePlain3;
      uniform vec3 uFirePlain4;
      uniform vec3 uFirePlain5;
      uniform vec3 uFirePlain6;
      uniform vec3 uFirePlain7;
      uniform vec3 uFirePlain8;
      uniform vec3 uFirePlain9;
      uniform vec3 uFirePlain10;
      uniform vec3 uFirePlain11;
      uniform vec3 uFirePlain12;
      uniform vec3 uFirePlain13;
      uniform vec3 uFirePlain14;
      uniform vec3 uFirePlain15;

      uniform vec3 uFireOcean0;
      uniform vec3 uFireOcean1;
      uniform vec3 uFireOcean2;
      uniform vec3 uFireOcean3;
      uniform vec3 uFireOcean4;
      uniform vec3 uFireOcean5;
      uniform vec3 uFireOcean6;
      uniform vec3 uFireOcean7;
      uniform vec3 uFireOcean8;
      uniform vec3 uFireOcean9;
      uniform vec3 uFireOcean10;
      uniform vec3 uFireOcean11;
      uniform vec3 uFireOcean12;
      uniform vec3 uFireOcean13;
      uniform vec3 uFireOcean14;
      uniform vec3 uFireOcean15;
 
      void main() {

        minHeight = float(${minHeight});
        sectionSize = float(${sectionSize});
        terrainNum = int(${terrainNum});

        if (terrainNum == 0 && pos.z < minHeight + sectionSize) {
          gl_FragColor = vec4(uFireMountain0, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 2.0) {
          gl_FragColor = vec4(uFireMountain1, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 3.0) {
          gl_FragColor = vec4(uFireMountain2, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 4.0) {
          gl_FragColor = vec4(uFireMountain3, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 5.0) {
          gl_FragColor = vec4(uFireMountain4, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 6.0) {
          gl_FragColor = vec4(uFireMountain5, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 7.0) {
          gl_FragColor = vec4(uFireMountain6, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 8.0) {
          gl_FragColor = vec4(uFireMountain7, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 9.0) {
          gl_FragColor = vec4(uFireMountain8, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 10.0) {
          gl_FragColor = vec4(uFireMountain9, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 11.0) {
          gl_FragColor = vec4(uFireMountain10, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 12.0) {
          gl_FragColor = vec4(uFireMountain11, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 13.0) {
          gl_FragColor = vec4(uFireMountain12, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 14.0) {
          gl_FragColor = vec4(uFireMountain13, 1.0);
        }
        else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 15.0) {
          gl_FragColor = vec4(uFireMountain14, 1.0);
        }
        else if (terrainNum == 0) {
          gl_FragColor = vec4(uFireMountain15, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize) {
          gl_FragColor = vec4(uFireHill0, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 2.0) {
          gl_FragColor = vec4(uFireHill1, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 3.0) {
          gl_FragColor = vec4(uFireHill2, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 4.0) {
          gl_FragColor = vec4(uFireHill3, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 5.0) {
          gl_FragColor = vec4(uFireHill4, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 6.0) {
          gl_FragColor = vec4(uFireHill5, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 7.0) {
          gl_FragColor = vec4(uFireHill6, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 8.0) {
          gl_FragColor = vec4(uFireHill7, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 9.0) {
          gl_FragColor = vec4(uFireHill8, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 10.0) {
          gl_FragColor = vec4(uFireHill9, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 11.0) {
          gl_FragColor = vec4(uFireHill10, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 12.0) {
          gl_FragColor = vec4(uFireHill11, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 13.0) {
          gl_FragColor = vec4(uFireHill12, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 14.0) {
          gl_FragColor = vec4(uFireHill13, 1.0);
        }
        else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 15.0) {
          gl_FragColor = vec4(uFireHill14, 1.0);
        }
        else if (terrainNum == 1) {
          gl_FragColor = vec4(uFireHill15, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize) {
          gl_FragColor = vec4(uFirePlain0, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 2.0) {
          gl_FragColor = vec4(uFirePlain1, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 3.0) {
          gl_FragColor = vec4(uFirePlain2, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 4.0) {
          gl_FragColor = vec4(uFirePlain3, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 5.0) {
          gl_FragColor = vec4(uFirePlain4, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 6.0) {
          gl_FragColor = vec4(uFirePlain5, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 7.0) {
          gl_FragColor = vec4(uFirePlain6, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 8.0) {
          gl_FragColor = vec4(uFirePlain7, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 9.0) {
          gl_FragColor = vec4(uFirePlain8, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 10.0) {
          gl_FragColor = vec4(uFirePlain9, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 11.0) {
          gl_FragColor = vec4(uFirePlain10, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 12.0) {
          gl_FragColor = vec4(uFirePlain11, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 13.0) {
          gl_FragColor = vec4(uFirePlain12, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 14.0) {
          gl_FragColor = vec4(uFirePlain13, 1.0);
        }
        else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 15.0) {
          gl_FragColor = vec4(uFirePlain14, 1.0);
        }
        else if (terrainNum == 2) {
          gl_FragColor = vec4(uFirePlain15, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize) {
          gl_FragColor = vec4(uFireOcean0, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 2.0) {
          gl_FragColor = vec4(uFireOcean1, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 3.0) {
          gl_FragColor = vec4(uFireOcean2, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 4.0) {
          gl_FragColor = vec4(uFireOcean3, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 5.0) {
          gl_FragColor = vec4(uFireOcean4, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 6.0) {
          gl_FragColor = vec4(uFireOcean5, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 7.0) {
          gl_FragColor = vec4(uFireOcean6, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 8.0) {
          gl_FragColor = vec4(uFireOcean7, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 9.0) {
          gl_FragColor = vec4(uFireOcean8, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 10.0) {
          gl_FragColor = vec4(uFireOcean9, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 11.0) {
          gl_FragColor = vec4(uFireOcean10, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 12.0) {
          gl_FragColor = vec4(uFireOcean11, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 13.0) {
          gl_FragColor = vec4(uFireOcean12, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 14.0) {
          gl_FragColor = vec4(uFireOcean13, 1.0);
        }
        else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 15.0) {
          gl_FragColor = vec4(uFireOcean14, 1.0);
        }
        else if (terrainNum == 3) {
          gl_FragColor = vec4(uFireOcean15, 1.0);
        }
        else {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
      }
    `,
  });

  return groundMaterial;
}

export function iceBiome(api, terrainNum, minHeight, sectionSize) {
    const groundMaterial = new THREE.ShaderMaterial({
      wireframe: api.WireFrame,
      uniforms: uniforms,
      vertexShader: `
        varying vec3 pos;
  
        void main() {
          pos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 pos;

        float minHeight;
        float sectionSize;
        int terrainNum;
        
        uniform vec3 uIceMountain0;
        uniform vec3 uIceMountain1;
        uniform vec3 uIceMountain2;
        uniform vec3 uIceMountain3;
        uniform vec3 uIceMountain4;
        uniform vec3 uIceMountain5;
        uniform vec3 uIceMountain6;
        uniform vec3 uIceMountain7;
        uniform vec3 uIceMountain8;
        uniform vec3 uIceMountain9;
        uniform vec3 uIceMountain10;
        uniform vec3 uIceMountain11;
        uniform vec3 uIceMountain12;
        uniform vec3 uIceMountain13;
        uniform vec3 uIceMountain14;
        uniform vec3 uIceMountain15;

        uniform vec3 uIceHill0;
        uniform vec3 uIceHill1;
        uniform vec3 uIceHill2;
        uniform vec3 uIceHill3;
        uniform vec3 uIceHill4;
        uniform vec3 uIceHill5;
        uniform vec3 uIceHill6;
        uniform vec3 uIceHill7;
        uniform vec3 uIceHill8;
        uniform vec3 uIceHill9;
        uniform vec3 uIceHill10;
        uniform vec3 uIceHill11;
        uniform vec3 uIceHill12;
        uniform vec3 uIceHill13;
        uniform vec3 uIceHill14;
        uniform vec3 uIceHill15;

        uniform vec3 uIcePlain0;
        uniform vec3 uIcePlain1;
        uniform vec3 uIcePlain2;
        uniform vec3 uIcePlain3;
        uniform vec3 uIcePlain4;
        uniform vec3 uIcePlain5;
        uniform vec3 uIcePlain6;
        uniform vec3 uIcePlain7;
        uniform vec3 uIcePlain8;
        uniform vec3 uIcePlain9;
        uniform vec3 uIcePlain10;
        uniform vec3 uIcePlain11;
        uniform vec3 uIcePlain12;
        uniform vec3 uIcePlain13;
        uniform vec3 uIcePlain14;
        uniform vec3 uIcePlain15;

        uniform vec3 uIceOcean0;
        uniform vec3 uIceOcean1;
        uniform vec3 uIceOcean2;
        uniform vec3 uIceOcean3;
        uniform vec3 uIceOcean4;
        uniform vec3 uIceOcean5;
        uniform vec3 uIceOcean6;
        uniform vec3 uIceOcean7;
        uniform vec3 uIceOcean8;
        uniform vec3 uIceOcean9;
        uniform vec3 uIceOcean10;
        uniform vec3 uIceOcean11;
        uniform vec3 uIceOcean12;
        uniform vec3 uIceOcean13;
        uniform vec3 uIceOcean14;
        uniform vec3 uIceOcean15;

        void main() {
          minHeight = float(${minHeight});
          sectionSize = float(${sectionSize});
          terrainNum = int(${terrainNum});

          if (terrainNum == 0 && pos.z < minHeight + sectionSize) {
            gl_FragColor = vec4(uIceMountain0, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 2.0) {
            gl_FragColor = vec4(uIceMountain1, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 3.0) {
            gl_FragColor = vec4(uIceMountain2, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 4.0) {
            gl_FragColor = vec4(uIceMountain3, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 5.0) {
            gl_FragColor = vec4(uIceMountain4, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 6.0) {
            gl_FragColor = vec4(uIceMountain5, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 7.0) {
            gl_FragColor = vec4(uIceMountain6, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 8.0) {
            gl_FragColor = vec4(uIceMountain7, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 9.0) {
            gl_FragColor = vec4(uIceMountain8, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 10.0) {
            gl_FragColor = vec4(uIceMountain9, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 11.0) {
            gl_FragColor = vec4(uIceMountain10, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 12.0) {
            gl_FragColor = vec4(uIceMountain11, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 13.0) {
            gl_FragColor = vec4(uIceMountain12, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 14.0) {
            gl_FragColor = vec4(uIceMountain13, 1.0);
          }
          else if (terrainNum == 0 && pos.z < minHeight + sectionSize * 15.0) {
            gl_FragColor = vec4(uIceMountain14, 1.0);
          }
          else if (terrainNum == 0) {
            gl_FragColor = vec4(uIceMountain15, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize) {
            gl_FragColor = vec4(uIceHill0, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 2.0) {
            gl_FragColor = vec4(uIceHill1, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 3.0) {
            gl_FragColor = vec4(uIceHill2, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 4.0) {
            gl_FragColor = vec4(uIceHill3, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 5.0) {
            gl_FragColor = vec4(uIceHill4, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 6.0) {
            gl_FragColor = vec4(uIceHill5, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 7.0) {
            gl_FragColor = vec4(uIceHill6, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 8.0) {
            gl_FragColor = vec4(uIceHill7, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 9.0) {
            gl_FragColor = vec4(uIceHill8, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 10.0) {
            gl_FragColor = vec4(uIceHill9, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 11.0) {
            gl_FragColor = vec4(uIceHill10, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 12.0) {
            gl_FragColor = vec4(uIceHill11, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 13.0) {
            gl_FragColor = vec4(uIceHill12, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 14.0) {
            gl_FragColor = vec4(uIceHill13, 1.0);
          }
          else if (terrainNum == 1 && pos.z < minHeight + sectionSize * 15.0) {
            gl_FragColor = vec4(uIceHill14, 1.0);
          }
          else if (terrainNum == 1) {
            gl_FragColor = vec4(uIceHill15, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize) {
            gl_FragColor = vec4(uIcePlain0, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 2.0) {
            gl_FragColor = vec4(uIcePlain1, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 3.0) {
            gl_FragColor = vec4(uIcePlain2, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 4.0) {
            gl_FragColor = vec4(uIcePlain3, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 5.0) {
            gl_FragColor = vec4(uIcePlain4, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 6.0) {
            gl_FragColor = vec4(uIcePlain5, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 7.0) {
            gl_FragColor = vec4(uIcePlain6, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 8.0) {
            gl_FragColor = vec4(uIcePlain7, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 9.0) {
            gl_FragColor = vec4(uIcePlain8, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 10.0) {
            gl_FragColor = vec4(uIcePlain9, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 11.0) {
            gl_FragColor = vec4(uIcePlain10, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 12.0) {
            gl_FragColor = vec4(uIcePlain11, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 13.0) {
            gl_FragColor = vec4(uIcePlain12, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 14.0) {
            gl_FragColor = vec4(uIcePlain13, 1.0);
          }
          else if (terrainNum == 2 && pos.z < minHeight + sectionSize * 15.0) {
            gl_FragColor = vec4(uIcePlain14, 1.0);
          }
          else if (terrainNum == 2) {
            gl_FragColor = vec4(uIcePlain15, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize) {
            gl_FragColor = vec4(uIceOcean0, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 2.0) {
            gl_FragColor = vec4(uIceOcean1, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 3.0) {
            gl_FragColor = vec4(uIceOcean2, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 4.0) {
            gl_FragColor = vec4(uIceOcean3, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 5.0) {
            gl_FragColor = vec4(uIceOcean4, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 6.0) {
            gl_FragColor = vec4(uIceOcean5, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 7.0) {
            gl_FragColor = vec4(uIceOcean6, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 8.0) {
            gl_FragColor = vec4(uIceOcean7, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 9.0) {
            gl_FragColor = vec4(uIceOcean8, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 10.0) {
            gl_FragColor = vec4(uIceOcean9, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 11.0) {
            gl_FragColor = vec4(uIceOcean10, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 12.0) {
            gl_FragColor = vec4(uIceOcean11, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 13.0) {
            gl_FragColor = vec4(uIceOcean12, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 14.0) {
            gl_FragColor = vec4(uIceOcean13, 1.0);
          }
          else if (terrainNum == 3 && pos.z < minHeight + sectionSize * 15.0) {
            gl_FragColor = vec4(uIceOcean14, 1.0);
          }
          else if (terrainNum == 3) {
            gl_FragColor = vec4(uIceOcean15, 1.0);
          }
          else {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      `,
    });

    return groundMaterial;
}  

export function earthBiome(api, terrainNum, minHeight, sectionSize) {
    const groundMaterial = new THREE.ShaderMaterial({
      wireframe: api.WireFrame,
      uniforms: uniforms,
      vertexShader: `
        varying vec3 pos;
  
        void main() {
          pos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 pos;

        float minHeight;
        float sectionSize;
        int terrainNum;
        
        uniform vec3 uEarthMountain0;
        uniform vec3 uEarthMountain1;
        uniform vec3 uEarthMountain2;
        uniform vec3 uEarthMountain3;
        uniform vec3 uEarthMountain4;
        uniform vec3 uEarthMountain5;
        uniform vec3 uEarthMountain6;
        uniform vec3 uEarthMountain7;
        uniform vec3 uEarthMountain8;
        uniform vec3 uEarthMountain9;
        uniform vec3 uEarthMountain10;
        uniform vec3 uEarthMountain11;
        uniform vec3 uEarthMountain12;
        uniform vec3 uEarthMountain13;
        uniform vec3 uEarthMountain14;
        uniform vec3 uEarthMountain15;

        uniform vec3 uEarthHill0;
        uniform vec3 uEarthHill1;
        uniform vec3 uEarthHill2;
        uniform vec3 uEarthHill3;
        uniform vec3 uEarthHill4;
        uniform vec3 uEarthHill5;
        uniform vec3 uEarthHill6;
        uniform vec3 uEarthHill7;
        uniform vec3 uEarthHill8;
        uniform vec3 uEarthHill9;
        uniform vec3 uEarthHill10;
        uniform vec3 uEarthHill11;
        uniform vec3 uEarthHill12;
        uniform vec3 uEarthHill13;
        uniform vec3 uEarthHill14;
        uniform vec3 uEarthHill15;

        uniform vec3 uEarthPlain0;
        uniform vec3 uEarthPlain1;
        uniform vec3 uEarthPlain2;
        uniform vec3 uEarthPlain3;
        uniform vec3 uEarthPlain4;
        uniform vec3 uEarthPlain5;
        uniform vec3 uEarthPlain6;
        uniform vec3 uEarthPlain7;
        uniform vec3 uEarthPlain8;
        uniform vec3 uEarthPlain9;
        uniform vec3 uEarthPlain10;
        uniform vec3 uEarthPlain11;
        uniform vec3 uEarthPlain12;
        uniform vec3 uEarthPlain13;
        uniform vec3 uEarthPlain14;
        uniform vec3 uEarthPlain15;

        uniform vec3 uEarthOcean0;
        uniform vec3 uEarthOcean1;
        uniform vec3 uEarthOcean2;
        uniform vec3 uEarthOcean3;
        uniform vec3 uEarthOcean4;
        uniform vec3 uEarthOcean5;
        uniform vec3 uEarthOcean6;
        uniform vec3 uEarthOcean7;
        uniform vec3 uEarthOcean8;
        uniform vec3 uEarthOcean9;
        uniform vec3 uEarthOcean10;
        uniform vec3 uEarthOcean11;
        uniform vec3 uEarthOcean12;
        uniform vec3 uEarthOcean13;
        uniform vec3 uEarthOcean14;
        uniform vec3 uEarthOcean15;
  
        void main() {

          float minHeight = float(${minHeight});
          float sectionSize = float(${sectionSize});
          terrainNum = int(${terrainNum});

          if( terrainNum == 0 && pos.z < minHeight + sectionSize) {
            gl_FragColor = vec4(uEarthMountain0, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 2.0) {
            gl_FragColor = vec4(uEarthMountain1, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 3.0) {
            gl_FragColor = vec4(uEarthMountain2, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 4.0) {
            gl_FragColor = vec4(uEarthMountain3, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 5.0) {
            gl_FragColor = vec4(uEarthMountain4, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 6.0) {
            gl_FragColor = vec4(uEarthMountain5, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 7.0) {
            gl_FragColor = vec4(uEarthMountain6, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 8.0) {
            gl_FragColor = vec4(uEarthMountain7, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 9.0) {
            gl_FragColor = vec4(uEarthMountain8, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 10.0) {
            gl_FragColor = vec4(uEarthMountain9, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 11.0) {
            gl_FragColor = vec4(uEarthMountain10, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 12.0) {
            gl_FragColor = vec4(uEarthMountain11, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 13.0) {
            gl_FragColor = vec4(uEarthMountain12, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 14.0) {
            gl_FragColor = vec4(uEarthMountain13, 1.0);
          }
          else if( terrainNum == 0 && pos.z < minHeight + sectionSize * 15.0) {
            gl_FragColor = vec4(uEarthMountain14, 1.0);
          }
          else if( terrainNum == 0) {
            gl_FragColor = vec4(uEarthMountain15, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize) {
            gl_FragColor = vec4(uEarthHill0, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 2.0) {
            gl_FragColor = vec4(uEarthHill1, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 3.0) {
            gl_FragColor = vec4(uEarthHill2, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 4.0) {
            gl_FragColor = vec4(uEarthHill3, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 5.0) {
            gl_FragColor = vec4(uEarthHill4, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 6.0) {
            gl_FragColor = vec4(uEarthHill5, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 7.0) {
            gl_FragColor = vec4(uEarthHill6, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 8.0) {
            gl_FragColor = vec4(uEarthHill7, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 9.0) {
            gl_FragColor = vec4(uEarthHill8, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 10.0) {
            gl_FragColor = vec4(uEarthHill9, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 11.0) {
            gl_FragColor = vec4(uEarthHill10, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 12.0) {
            gl_FragColor = vec4(uEarthHill11, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 13.0) {
            gl_FragColor = vec4(uEarthHill12, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 14.0) {
            gl_FragColor = vec4(uEarthHill13, 1.0);
          }
          else if( terrainNum == 1 && pos.z < minHeight + sectionSize * 15.0) {
            gl_FragColor = vec4(uEarthHill14, 1.0);
          }
          else if( terrainNum == 1) {
            gl_FragColor = vec4(uEarthHill15, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize) {
            gl_FragColor = vec4(uEarthPlain0, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 2.0) {
            gl_FragColor = vec4(uEarthPlain1, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 3.0) {
            gl_FragColor = vec4(uEarthPlain2, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 4.0) {
            gl_FragColor = vec4(uEarthPlain3, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 5.0) {
            gl_FragColor = vec4(uEarthPlain4, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 6.0) {
            gl_FragColor = vec4(uEarthPlain5, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 7.0) {
            gl_FragColor = vec4(uEarthPlain6, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 8.0) {
            gl_FragColor = vec4(uEarthPlain7, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 9.0) {
            gl_FragColor = vec4(uEarthPlain8, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 10.0) {
            gl_FragColor = vec4(uEarthPlain9, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 11.0) {
            gl_FragColor = vec4(uEarthPlain10, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 12.0) {
            gl_FragColor = vec4(uEarthPlain11, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 13.0) {
            gl_FragColor = vec4(uEarthPlain12, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 14.0) {
            gl_FragColor = vec4(uEarthPlain13, 1.0);
          }
          else if( terrainNum == 2 && pos.z < minHeight + sectionSize * 15.0) {
            gl_FragColor = vec4(uEarthPlain14, 1.0);
          }
          else if( terrainNum == 2) {
            gl_FragColor = vec4(uEarthPlain15, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize) {
            gl_FragColor = vec4(uEarthOcean0, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 2.0) {
            gl_FragColor = vec4(uEarthOcean1, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 3.0) {
            gl_FragColor = vec4(uEarthOcean2, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 4.0) {
            gl_FragColor = vec4(uEarthOcean3, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 5.0) {
            gl_FragColor = vec4(uEarthOcean4, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 6.0) {
            gl_FragColor = vec4(uEarthOcean5, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 7.0) {
            gl_FragColor = vec4(uEarthOcean6, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 8.0) {
            gl_FragColor = vec4(uEarthOcean7, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 9.0) {
            gl_FragColor = vec4(uEarthOcean8, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 10.0) {
            gl_FragColor = vec4(uEarthOcean9, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 11.0) {
            gl_FragColor = vec4(uEarthOcean10, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 12.0) {
            gl_FragColor = vec4(uEarthOcean11, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 13.0) {
            gl_FragColor = vec4(uEarthOcean12, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 14.0) {
            gl_FragColor = vec4(uEarthOcean13, 1.0);
          }
          else if( terrainNum == 3 && pos.z < minHeight + sectionSize * 15.0) {
            gl_FragColor = vec4(uEarthOcean14, 1.0);
          }
          else if( terrainNum == 3) {
            gl_FragColor = vec4(uEarthOcean15, 1.0);
          }
          else {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
          }
        }
      `,
    });
  
    return groundMaterial;
}
  
export function waterBiome(api, terrainNum, minHeight, sectionSize) {
    const groundMaterial = new THREE.ShaderMaterial({
      wireframe: api.WireFrame,
      uniforms: uniforms,
      vertexShader: `
        varying vec3 pos;
  
        void main() {
          pos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 pos;
  
        float minHeight;
        float sectionSize;
        int terrainNum;

        uniform vec3 uWaterMountain0;
        uniform vec3 uWaterMountain1;
        uniform vec3 uWaterMountain2;
        uniform vec3 uWaterMountain3;
        uniform vec3 uWaterMountain4;
        uniform vec3 uWaterMountain5;
        uniform vec3 uWaterMountain6;
        uniform vec3 uWaterMountain7;
        uniform vec3 uWaterMountain8;
        uniform vec3 uWaterMountain9;
        uniform vec3 uWaterMountain10;
        uniform vec3 uWaterMountain11;
        uniform vec3 uWaterMountain12;
        uniform vec3 uWaterMountain13;
        uniform vec3 uWaterMountain14;
        uniform vec3 uWaterMountain15;

        uniform vec3 uWaterHill0;
        uniform vec3 uWaterHill1;
        uniform vec3 uWaterHill2;
        uniform vec3 uWaterHill3;
        uniform vec3 uWaterHill4;
        uniform vec3 uWaterHill5;
        uniform vec3 uWaterHill6;
        uniform vec3 uWaterHill7;
        uniform vec3 uWaterHill8;
        uniform vec3 uWaterHill9;
        uniform vec3 uWaterHill10;
        uniform vec3 uWaterHill11;
        uniform vec3 uWaterHill12;
        uniform vec3 uWaterHill13;
        uniform vec3 uWaterHill14;
        uniform vec3 uWaterHill15;

        uniform vec3 uWaterPlain0;
        uniform vec3 uWaterPlain1;
        uniform vec3 uWaterPlain2;
        uniform vec3 uWaterPlain3;
        uniform vec3 uWaterPlain4;
        uniform vec3 uWaterPlain5;
        uniform vec3 uWaterPlain6;
        uniform vec3 uWaterPlain7;
        uniform vec3 uWaterPlain8;
        uniform vec3 uWaterPlain9;
        uniform vec3 uWaterPlain10;
        uniform vec3 uWaterPlain11;
        uniform vec3 uWaterPlain12;
        uniform vec3 uWaterPlain13;
        uniform vec3 uWaterPlain14;
        uniform vec3 uWaterPlain15;

        uniform vec3 uWaterOcean0;
        uniform vec3 uWaterOcean1;
        uniform vec3 uWaterOcean2;
        uniform vec3 uWaterOcean3;
        uniform vec3 uWaterOcean4;
        uniform vec3 uWaterOcean5;
        uniform vec3 uWaterOcean6;
        uniform vec3 uWaterOcean7;
        uniform vec3 uWaterOcean8;
        uniform vec3 uWaterOcean9;
        uniform vec3 uWaterOcean10;
        uniform vec3 uWaterOcean11;
        uniform vec3 uWaterOcean12;
        uniform vec3 uWaterOcean13;
        uniform vec3 uWaterOcean14;
        uniform vec3 uWaterOcean15;

        void main() {

          minHeight = float(${minHeight});
          sectionSize = float(${sectionSize});
          terrainNum = int(${terrainNum});
          
          if( pos.z < minHeight + sectionSize) {
            if( terrainNum == 0){
              gl_FragColor = vec4(uWaterMountain0, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill0, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain0, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean0, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 2.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain1, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill1, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain1, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean1, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 3.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain2, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill2, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain2, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean2, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 4.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain3, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill3, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain3, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean3, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 5.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain4, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill4, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain4, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean4, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 6.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain5, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill5, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain5, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean5, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 7.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain6, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill6, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain6, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean6, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 8.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain7, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill7, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain7, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean7, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 9.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain8, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill8, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain8, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean8, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 10.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain9, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill9, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain9, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean9, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 11.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain10, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill10, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain10, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean10, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 12.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain11, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill11, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain11, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean11, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 13.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain12, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill12, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain12, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean12, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 14.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain13, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill13, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain13, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean13, 1.0);
            }
          }
          else if( pos.z < minHeight + sectionSize * 15.0) {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain14, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill14, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain14, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean14, 1.0);
            }
          }
          else {
            if( terrainNum == 0) {
              gl_FragColor = vec4(uWaterMountain15, 1.0);
            }
            else if( terrainNum == 1) {
              gl_FragColor = vec4(uWaterHill15, 1.0);
            }
            else if( terrainNum == 2) {
              gl_FragColor = vec4(uWaterPlain15, 1.0);
            }
            else if( terrainNum == 3) {
              gl_FragColor = vec4(uWaterOcean15, 1.0);
            }
            else {
              gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
            }
          }
        }
      `,
    });

    return groundMaterial;
  }
  

export function randomBiome(api,centerZ,centerX,terrainNum,chunkMin,sectionSize){

  let biomeNoise = MATH.improvedNoise(centerZ+0.7, 0, centerX+0.7);
  let biomeNum = (Math.abs(biomeNoise) *10) % 4;

  //console.log("biomeNum: "+ biomeNum);

  if(biomeNum < 1) {
    return fireBiome(api,terrainNum,chunkMin,sectionSize);
  }
  if(biomeNum < 2) {
    return iceBiome(api,terrainNum,chunkMin,sectionSize);
  }
  if(biomeNum < 3) {
    return earthBiome(api,terrainNum,chunkMin,sectionSize);
  }
  if(biomeNum < 4) {
    return waterBiome(api,terrainNum,chunkMin,sectionSize);
  }
  
  return new THREE.MeshLambertMaterial({color: black});
}

export function getGroundMaterial(api,centerZ,centerX,biome,terrain, chunkMin, chunkMax) {

  //console.log("in getGroundMaterial with biome: "+biome+" and terrain: "+terrain+" and centerZ: "+centerZ+" and centerX: "+centerX+" and api: "+api);
  let terrainNoise = MATH.improvedNoise(centerZ+0.5, 0, centerX+0.5);
  let terrainNum = (Math.abs(terrainNoise) *10) % 4;

  // height max and min
  const sections = 16;
  let sectionSize = (chunkMax - chunkMin) / sections;
  //console.log("(chunkMax: "+chunkMax+" - chunkMin: "+chunkMin+") / sections: "+sections+" = sectionSize: "+sectionSize);
  
  if(biome == "Fire") {
    if(terrain == "Mountain") {
      return fireBiome(api,0,chunkMin,sectionSize);
    }
    else if(terrain == "Hill") {
      return fireBiome(api,1,chunkMin,sectionSize);
    }
    else if(terrain == "Plain") {
      return fireBiome(api,2,chunkMin,sectionSize);
    }
    else if(terrain == "Ocean") {
      return fireBiome(api,3,chunkMin,sectionSize);
    }
    else if(terrain == "Random") { 
      return fireBiome(api,terrainNum,chunkMin,sectionSize);
    }
    else {
      return new THREE.MeshLambertMaterial({color: black});
    }
  }
  if(biome == "Ice") {
    if(terrain == "Mountain") {
      return iceBiome(api,0,chunkMin,sectionSize);
    }
    else if(terrain == "Hill") {
      return iceBiome(api,1,chunkMin,sectionSize);
    }
    else if(terrain == "Plain") {
      return iceBiome(api,2,chunkMin,sectionSize);
    }
    else if(terrain == "Ocean") {
      return iceBiome(api,3,chunkMin,sectionSize);
    }
    else if(terrain == "Random") {
      return iceBiome(api,terrainNum,chunkMin,sectionSize);
    }
    else {
      return new THREE.MeshLambertMaterial({color: black});
    }
  }
  if(biome == "Earth") {
    if(terrain == "Mountain") {
      return earthBiome(api,0,chunkMin,sectionSize);
    }
    else if(terrain == "Hill") {
      return earthBiome(api,1,chunkMin,sectionSize);
    }
    else if(terrain == "Plain") {
      return earthBiome(api,2,chunkMin,sectionSize);
    }
    else if(terrain == "Ocean") {
      return earthBiome(api,3,chunkMin,sectionSize);
    }
    else if(terrain == "Random") {
      return earthBiome(api,terrainNum,chunkMin,sectionSize);
    }
    else {
      return new THREE.MeshLambertMaterial({color: black});
    }
  }
  if(biome == "Water") {
    if(terrain == "Mountain") {
      return waterBiome(api,0,chunkMin,sectionSize);
    }
    else if(terrain == "Hill") {
      return waterBiome(api,1,chunkMin,sectionSize);
    }
    else if(terrain == "Plain") {
      return waterBiome(api,2,chunkMin,sectionSize);
    }
    else if(terrain == "Ocean") {
      return waterBiome(api,3,chunkMin,sectionSize);
    }
    else if(terrain == "Random") {
      return waterBiome(api,terrainNum,chunkMin,sectionSize);
    }
    else {
      return new THREE.MeshLambertMaterial({color: black});
    }
  }
  if(biome == "Random") {
    if(terrain == "Mountain") {
      return randomBiome(api,centerZ,centerX,0,chunkMin,sectionSize);
    }
    else if(terrain == "Hill") {
      return randomBiome(api,centerZ,centerX,1,chunkMin,sectionSize);
    }
    else if(terrain == "Plain") {
      return randomBiome(api,centerZ,centerX,2,chunkMin,sectionSize);
    }
    else if(terrain == "Ocean") {
      return randomBiome(api,centerZ,centerX,3,chunkMin,sectionSize);
    }
    else if(terrain == "Random") {
      return randomBiome(api,centerZ,centerX,terrainNum,chunkMin,sectionSize);
    }
  }
  return new THREE.MeshLambertMaterial({color: black})
    
}