import React, { useState } from 'react';
import GlobalSettings from './GlobalSettings';
import IconSettings from './IconSettings';
import MainSettings from './MainSettings';
import LogoPreview from './LogoPreview';
import AccentSettings from './AccentSettings';
import { faIcons } from './faIcons';
import { mdiIcons } from './mdiIcons';
import WebFont from 'webfontloader';


const colorPatterns = [
  {
    // Earthy tones: Browns and creams
    colors: [
      { r: 0.35, g: 0.16, b: 0.14 }, // Logo color (dark brown)
      { r: 0.91, g: 0.90, b: 0.88 }, // Text color (very light gray)
      { r: 0.75, g: 0.75, b: 0.72 }, // Accent color (light earth)
      { r: 0.20, g: 0.09, b: 0.06 }  // Background color (deep brown)
    ]
  },
  {
    // Monochrome shades of gray
    colors: [
      { r: 0.2, g: 0.2, b: 0.2 },  // Logo color (dark gray)
      { r: 0.95, g: 0.95, b: 0.95 },// Text color (very light gray)
      { r: 0.5, g: 0.5, b: 0.5 },  // Accent color (medium gray)
      { r: 0.1, g: 0.1, b: 0.1 }   // Background color (almost black)
    ]
  },
  {
    // Cool blues
    colors: [
      { r: 0.0, g: 0.2, b: 0.4 },   // Logo color (navy blue)
      { r: 0.9, g: 0.9, b: 1.0 },   // Text color (pale blue)
      { r: 0.0, g: 0.5, b: 0.7 },   // Accent color (cerulean)
      { r: 0.04, g: 0.1, b: 0.2 }   // Background color (dark blue)
    ]
  },
  {
    // Natural greens
    colors: [
      { r: 0.0, g: 0.3, b: 0.1 },   // Logo color (dark green)
      { r: 0.9, g: 1.0, b: 0.9 },   // Text color (very light green)
      { r: 0.2, g: 0.5, b: 0.2 },   // Accent color (forest green)
      { r: 0.05, g: 0.15, b: 0.05 } // Background color (deep green)
    ]
  },
  {
    // Warm reds and oranges
    colors: [
      { r: 0.8, g: 0.1, b: 0.1 },   // Logo color (crimson)
      { r: 1.0, g: 0.92, b: 0.8 },  // Text color (off white)
      { r: 0.9, g: 0.4, b: 0.1 },   // Accent color (bright orange)
      { r: 0.4, g: 0.05, b: 0.0 }   // Background color (maroon)
    ]
  },
  {
    // Subdued purples
    colors: [
      { r: 0.3, g: 0.0, b: 0.3 },   // Logo color (deep purple)
      { r: 0.95, g: 0.85, b: 0.95 },// Text color (lavender blush)
      { r: 0.5, g: 0.2, b: 0.5 },   // Accent color (medium purple)
      { r: 0.1, g: 0.0, b: 0.1 }    // Background color (very dark purple)
    ]
  }
];

WebFont.load({
  google: {
    families: [
      "Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman",
      "Georgia", "Garamond", "Courier New", "Brush Script MT", "Lobster", "Pacifico",
      "Roboto", "Montserrat", "Open Sans", "Playfair Display", "Merriweather", "Roboto Slab"
    ]
  }
});

const fonts = [
  "Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman",
  "Georgia", "Garamond", "Courier New", "Brush Script MT", "Lobster", "Pacifico",
  "Roboto", "Montserrat", "Open Sans", "Playfair Display", "Merriweather", "Roboto Slab"
];

const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (n: number) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
const getRandomColor = (): string => {
  const pattern = getRandomElement(colorPatterns);
  const color = getRandomElement(pattern.colors);
  return rgbToHex(Math.floor(color.r * 255), Math.floor(color.g * 255), Math.floor(color.b * 255));
};
const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
// Function to calculate the luminance of an RGB color
const luminance = (r: number, g: number, b: number) => {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// Function to calculate contrast ratio between two colors
const contrastRatio = (lum1: number, lum2: number) => {
  const bright = Math.max(lum1, lum2);
  const dark = Math.min(lum1, lum2);
  return (bright + 0.05) / (dark + 0.05);
};

const getRandomColorWithContrast = (bgColorHex: string) => {
  let contrast = 0;
  let newColor = '';
  while (contrast < 3) {  // Minimum contrast ratio; increase for more contrast
    newColor = getRandomColor();
    const bgLum = luminance(parseInt(bgColorHex.slice(1, 3), 16), parseInt(bgColorHex.slice(3, 5), 16), parseInt(bgColorHex.slice(5, 7), 16));
    const colorLum = luminance(parseInt(newColor.slice(1, 3), 16), parseInt(newColor.slice(3, 5), 16), parseInt(newColor.slice(5, 7), 16));
    contrast = contrastRatio(bgLum, colorLum);
  }
  return newColor;
};
const Form: React.FC = () => {



  const [text, setText] = useState('Logo');
  const [fontSize, setFontSize] = useState(48);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [isBold, setIsBold] = useState(false);
  const [fontFamily, setFontFamily] = useState('');
  const [color, setColor] = useState('#000000');
  const [icon, setIcon] = useState(faIcons[0]);
  const [iconSize, setIconSize] = useState(100);
  const [iconColor, setIconColor] = useState('#000000');
  
  const [accentText, setAccentText] = useState('World');
  const [accentFontSize, setAccentFontSize] = useState(48);
  const [accentLetterSpacing, setAccentLetterSpacing] = useState(0);
  const [isAccentBold, setIsAccentBold] = useState(false);
  const [accentFontFamily, setAccentFontFamily] = useState('');
  const [accentColor, setAccentColor] = useState('#000000');
  const [layoutHorizontal, setLayoutHorizontal] = useState(true);
  const [shapesOn, setShapesOn] = useState(false);
  const [offsetSize, setOffsetSize] = useState(5);
  const [offsetColor, setOffsetColor] = useState("#f2f2f2");
  const [shapeColor, setShapeColor] = useState("#ffffff");
  const [backgroundColorLogo, setBackgroundColorLogo] = useState("#ffffff");
  const [horizontalPadding, setHorizontalPadding] = useState(0);
  const [verticalPadding, setVerticalPadding] = useState(0);

  const [activeTab, setActiveTab] = useState('global');

  const handleTextChange = (newText: string) => setText(newText);
  const handleFontSizeChange = (newSize: number) => setFontSize(newSize);
  const handleLetterSpacingChange = (newSpacing: number) => setLetterSpacing(newSpacing);
  const handleBoldToggle = () => setIsBold(!isBold);
  const handleAccentTextChange = (newText: string) => setAccentText(newText);
  const handleAccentFontSizeChange = (newSize: number) => setAccentFontSize(newSize);
  const handleAccentLetterSpacingChange = (newSpacing: number) => setAccentLetterSpacing(newSpacing);
  const handleAccentBoldToggle = () => setIsAccentBold(!isAccentBold);
  const randomizeLogo = () => {
    const backgroundColor = getRandomColor(); // Get a random background color first
    setBackgroundColorLogo(backgroundColor);
  
    setText(getRandomElement(['Hello', 'Logo', 'Design', 'Creative']));
    setFontFamily(getRandomElement(fonts));
    setFontSize(getRandomNumber(35, 60));
    setLetterSpacing(getRandomNumber(0, 5));
    setIsBold(Math.random() > 0.5);
    setColor(getRandomColorWithContrast(backgroundColor)); // Ensure text color contrasts with background
    const randomIcon = getRandomElement([...faIcons, ...mdiIcons]);
    setIcon(randomIcon);
    setIconSize(getRandomNumber(50, 100));
    setIconColor(getRandomColorWithContrast(backgroundColor)); // Ensure icon color contrasts with background
    
    setAccentText(getRandomElement(['World', 'Art', 'Style', 'Vibe']));
    setAccentFontFamily(getRandomElement(fonts));
    setAccentFontSize(getRandomNumber(35, 60));
    setAccentLetterSpacing(getRandomNumber(0, 5));
    setIsAccentBold(Math.random() > 0.5);
    setAccentColor(getRandomColorWithContrast(backgroundColor)); // Ensure accent color contrasts with background
  
    setHorizontalPadding(getRandomNumber(10, 20));
    setVerticalPadding(getRandomNumber(10, 20));
    setLayoutHorizontal(Math.random() > 0.5);
    setShapesOn(Math.random() > 0.5);
    setOffsetSize(getRandomNumber(2, 8));
    setOffsetColor(getRandomColorWithContrast(backgroundColor));
    setShapeColor(getRandomColorWithContrast(backgroundColor));
  };

  return (
    <div className="shadow-sm p-6 mb-8 rounded-lg w-full max-w-4xl mx-auto bg-white">
      <div className="w-full mb-6">
        <LogoPreview
          icon={icon}
          iconSize={iconSize}
          iconColor={iconColor}
          text={text}
          fontFamily={fontFamily}
          fontSize={fontSize}
          letterSpacing={letterSpacing}
          isBold={isBold}
          color={color}
          accentText={accentText}
          accentFontFamily={accentFontFamily}
          accentFontSize={accentFontSize}
          accentLetterSpacing={accentLetterSpacing}
          isAccentBold={isAccentBold}
          accentColor={accentColor}
          layoutHorizontal={layoutHorizontal}
          shapesOn={shapesOn}
          offsetSize={offsetSize}
          offsetColor={offsetColor}
          shapeColor={shapeColor}
          backgroundColorLogo={backgroundColorLogo}
          horizontalPadding={horizontalPadding}
          verticalPadding={verticalPadding}
        />
      </div>

      <div className="w-full flex justify-center mb-6">
        <button
          onClick={randomizeLogo}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300"
        >
          Randomize Logo
        </button>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center">
          <li className="mr-2">
            <button
              className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'global' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'}`}
              onClick={() => setActiveTab('global')}
            >
              Global Settings
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'icon' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'}`}
              onClick={() => setActiveTab('icon')}
            >
              Icon Settings
            </button>
          </li>
          <li className="mr-2">
            <button
              className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'main' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'}`}
              onClick={() => setActiveTab('main')}
            >
              Main Settings
            </button>
          </li>
          <li>
            <button
              className={`inline-block p-4 rounded-t-lg border-b-2 ${activeTab === 'accent' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'}`}
              onClick={() => setActiveTab('accent')}
            >
              Accent Settings
            </button>
          </li>
        </ul>
      </div>

      <div>
        {activeTab === 'global' && (
          <div className="px-4 mb-4">
            <GlobalSettings
              layoutHorizontal={layoutHorizontal}
              setLayoutHorizontal={setLayoutHorizontal}
              offsetSize={offsetSize}
              setOffsetSize={setOffsetSize}
              offsetColor={offsetColor}
              setOffsetColor={setOffsetColor}
              backgroundColorLogo={backgroundColorLogo}
              setBackgroundColorLogo={setBackgroundColorLogo}
              horizontalPadding={horizontalPadding}
              setHorizontalPadding={setHorizontalPadding}
              verticalPadding={verticalPadding}
              setVerticalPadding={setVerticalPadding}
            />
          </div>
        )}
        {activeTab === 'icon' && (
          <div className="px-4 mb-4">
            <IconSettings 
              setIcon={setIcon}
              iconSize={iconSize}
              setIconSize={setIconSize}
              iconColor={iconColor}
              setIconColor={setIconColor}icon={icon}
            />
          </div>
        )}
        {activeTab === 'main' && (
          <div className="px-4 mb-4">
            <MainSettings
              text={text}
              onTextChange={handleTextChange}
              fontSize={fontSize}
              onFontSizeChange={handleFontSizeChange}
              letterSpacing={letterSpacing}
              onLetterSpacingChange={handleLetterSpacingChange}
              isBold={isBold}
              onBoldToggle={handleBoldToggle}
              fontFamily={fontFamily}
              setFontFamily={setFontFamily}
              color={color}
              setColor={setColor}
            />
          </div>
        )}
        {activeTab === 'accent' && (
          <div className="px-4 mb-4">
            <AccentSettings
              text={accentText}
              onTextChange={handleAccentTextChange}
              fontSize={accentFontSize}
              onFontSizeChange={handleAccentFontSizeChange}
              letterSpacing={accentLetterSpacing}
              onLetterSpacingChange={handleAccentLetterSpacingChange}
              isBold={isAccentBold}
              onBoldToggle={handleAccentBoldToggle}
              fontFamily={accentFontFamily}
              setFontFamily={setAccentFontFamily}
              color={accentColor}
              setColor={setAccentColor}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;

