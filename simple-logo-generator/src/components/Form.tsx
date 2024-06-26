import React, { useState } from 'react';
import GlobalSettings from './GlobalSettings';
import IconSettings from './IconSettings';
import MainSettings from './MainSettings';
import LogoPreview from './LogoPreview';
import AccentSettings from './AccentSettings';
import { faIcons } from './faIcons';

const colorPatterns = [
  {
    colors: [
      { r: 0.0, g: 0.6, b: 0.15715719335752418 },
      { r: 0.040000000000000036, g: 0.76, b: 0.22858863202902907 },
      { r: 0.09999999999999998, g: 0.9, b: 0.3095429244766989 },
      { r: 0.3200000000000002, g: 0.88, b: 0.4666800471336894 },
      { r: 0.52, g: 0.8799999999999999, b: 0.6142943160145145 }
    ]
  },
  {
    colors: [
      { r: 0.0, g: 0.19299808764323123, b: 0.6 },
      { r: 0.040000000000000036, g: 0.27159770517187753, b: 0.76 },
      { r: 0.09999999999999998, g: 0.35733078352430836, b: 0.9 },
      { r: 0.3200000000000002, g: 0.5001315484670159, b: 0.88 },
      { r: 0.52, g: 0.6357988525859387, b: 0.8799999999999999 }
    ]
  },
  {
    colors: [
      { r: 0.6, g: 0.0, b: 0.5431533686439877 },
      { r: 0.76, g: 0.040000000000000036, b: 0.6917840423727852 },
      { r: 0.9, g: 0.09999999999999998, b: 0.8242044915253169 },
      { r: 0.88, g: 0.3200000000000002, b: 0.8269431440677218 },
      { r: 0.8799999999999999, g: 0.52, b: 0.8458920211863925 }
    ]
  },
  {
    colors: [
      { r: 0.6, g: 0.3066913503552584, b: 0.0 },
      { r: 0.76, g: 0.4080296204263101, b: 0.040000000000000036 },
      { r: 0.9, g: 0.5089218004736779, b: 0.09999999999999998 },
      { r: 0.88, g: 0.6062452603315747, b: 0.3200000000000002 },
      { r: 0.8799999999999999, g: 0.7040148102131549, b: 0.52 }
    ]
  },
  {
    colors: [
      { r: 0.04346393064549842, g: 0.6, b: 0.0 },
      { r: 0.09215671677459815, g: 0.76, b: 0.040000000000000036 },
      { r: 0.15795190752733124, g: 0.9, b: 0.09999999999999998 },
      { r: 0.360566335269132, g: 0.88, b: 0.3200000000000002 },
      { r: 0.546078358387299, g: 0.8799999999999999, b: 0.52 }
    ]
  },
  {
    colors: [
      { r: 0.0, g: 0.3936192116462549, b: 0.6 },
      { r: 0.040000000000000036, g: 0.5123430539755058, b: 0.76 },
      { r: 0.09999999999999998, g: 0.6248256155283398, b: 0.9 },
      { r: 0.3200000000000002, g: 0.6873779308698379, b: 0.88 },
      { r: 0.52, g: 0.7561715269877529, b: 0.8799999999999999 }
    ]
  }
];


// Utility functions
const getRandomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomColor = (): string => {
  const pattern = getRandomElement(colorPatterns);
  const color = getRandomElement(pattern.colors);
  return `rgb(${Math.floor(color.r * 255)}, ${Math.floor(color.g * 255)}, ${Math.floor(color.b * 255)})`;
};const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const fonts = [
  "Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman",
  "Georgia", "Garamond", "Courier New", "Brush Script MT", "Lobster", "Pacifico"
  // Add more fonts as necessary
];

const Form: React.FC = () => {
  const [text, setText] = useState('Logo');
  const [fontSize, setFontSize] = useState(16);  // Default font size
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [isBold, setIsBold] = useState(false);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [color, setColor] = useState('#000000'); // Default color is black
  const [icon, setIcon] = useState(faIcons[0]);
  const [iconSize, setIconSize] = useState(100);
  const [iconColor, setIconColor] = useState('#000000');
  
  const [accentText, setAccentText] = useState('World');
  const [accentFontSize, setAccentFontSize] = useState(48);  // Default accent font size
  const [accentLetterSpacing, setAccentLetterSpacing] = useState(0);
  const [isAccentBold, setIsAccentBold] = useState(false);
  const [accentFontFamily, setAccentFontFamily] = useState('Arial');
  const [accentColor, setAccentColor] = useState('#000000');
  const [layoutHorizontal, setLayoutHorizontal] = useState(true);
  const [shapesOn, setShapesOn] = useState(false);
  const [offsetSize, setOffsetSize] = useState(5.5);
  const [offsetColor, setOffsetColor] = useState("#f2f2f2");
  const [shapeColor, setShapeColor] = useState("#ffffff"); // New state for shape color
  const [backgroundColorLogo, setBackgroundColorLogo] = useState("#ffffff"); // New state for logo background color
  const [horizontalPadding, setHorizontalPadding] = useState(0); // New state for horizontal padding
  const [verticalPadding, setVerticalPadding] = useState(0); // New state for vertical padding

  const [activeTab, setActiveTab] = useState('global');

  // Handlers for MainSettings
  const handleTextChange = (newText: string) => setText(newText);
  const handleFontSizeChange = (newSize: number) => setFontSize(newSize);
  const handleLetterSpacingChange = (newSpacing: number) => setLetterSpacing(newSpacing);
  const handleBoldToggle = () => setIsBold(!isBold);
  
  // Handlers for AccentSettings
  const handleAccentTextChange = (newText: string) => setAccentText(newText);
  const handleAccentFontSizeChange = (newSize: number) => setAccentFontSize(newSize);
  const handleAccentLetterSpacingChange = (newSpacing: number) => setAccentLetterSpacing(newSpacing);
  const handleAccentBoldToggle = () => setIsAccentBold(!isAccentBold);

  const randomizeLogo = () => {
    setText(getRandomElement(['Hello', 'Logo', 'Design', 'Creative']));
    setFontFamily(getRandomElement(fonts));
    setFontSize(getRandomNumber(10, 100));
    setLetterSpacing(getRandomNumber(0, 20));
    setIsBold(Math.random() > 0.5);
    setColor(getRandomColor());
    setIcon(getRandomElement(faIcons));
    setIconSize(getRandomNumber(25, 100));
    setIconColor(getRandomColor());
    
    setAccentText(getRandomElement(['World', 'Art', 'Style', 'Vibe']));
    setAccentFontFamily(getRandomElement(fonts));
    setAccentFontSize(getRandomNumber(10, 100));
    setAccentLetterSpacing(getRandomNumber(0, 20));
    setIsAccentBold(Math.random() > 0.5);
    setAccentColor(getRandomColor());

    // Additional settings
    setBackgroundColorLogo(getRandomColor());
    setHorizontalPadding(getRandomNumber(0, 10));
    setVerticalPadding(getRandomNumber(0, 10));
    setLayoutHorizontal(Math.random() > 0.5);
    setShapesOn(Math.random() > 0.5);
    setOffsetSize(getRandomNumber(0, 10));
    setOffsetColor(getRandomColor());
    setShapeColor(getRandomColor());
  };
  return (
    <div className="shadow-sm p-6 mb-8 rounded-lg w-full max-w-4xl mx-auto bg-white">
      {/* LogoPreview */}
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

      {/* Randomize Button */}
      <div className="w-full flex justify-center mb-6">
        <button
          onClick={randomizeLogo}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300"
        >
          Randomize Logo
        </button>
      </div>

      {/* Tabs */}
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

      {/* Tab Content */}
      <div>
        {activeTab === 'global' && (
          <div className="px-4 mb-4">
            <GlobalSettings
              layoutHorizontal={layoutHorizontal}
              setLayoutHorizontal={setLayoutHorizontal}
              shapesOn={shapesOn}
              setShapesOn={setShapesOn}
              offsetSize={offsetSize}
              setOffsetSize={setOffsetSize}
              offsetColor={offsetColor}
              setOffsetColor={setOffsetColor}
              shapeColor={shapeColor}
              setShapeColor={setShapeColor}
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
              setIconColor={setIconColor}
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
