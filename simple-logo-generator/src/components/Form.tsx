import React, { useState } from 'react';
import GlobalSettings from './GlobalSettings';
import IconSettings from './IconSettings';
import MainSettings from './MainSettings';
import LogoPreview from './LogoPreview';
import AccentSettings from './AccentSettings';
import { faIcons } from './faIcons';

// Utility functions
const getRandomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

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
  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState('#000000');
  
  const [accentText, setAccentText] = useState('World');
  const [accentFontSize, setAccentFontSize] = useState(48);  // Default accent font size
  const [accentLetterSpacing, setAccentLetterSpacing] = useState(0);
  const [isAccentBold, setIsAccentBold] = useState(false);
  const [accentFontFamily, setAccentFontFamily] = useState('Arial');
  const [accentColor, setAccentColor] = useState('#000000');
  
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
    setIconSize(getRandomNumber(1, 5));
    setIconColor(getRandomColor());
    
    setAccentText(getRandomElement(['World', 'Art', 'Style', 'Vibe']));
    setAccentFontFamily(getRandomElement(fonts));
    setAccentFontSize(getRandomNumber(10, 100));
    setAccentLetterSpacing(getRandomNumber(0, 20));
    setIsAccentBold(Math.random() > 0.5);
    setAccentColor(getRandomColor());
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 grid grid-rows-5 grid-cols-2 gap-4 w-full max-w-4xl">
      {/* Grid cell for GlobalSettings */}
      <div className="flex justify-center items-center">
        <GlobalSettings />
      </div>

      {/* Grid cell for IconSettings */}
      <div className="flex justify-center items-center">
        <IconSettings setIcon={setIcon} iconSize={iconSize} setIconSize={setIconSize} iconColor={iconColor}  setIconColor={setIconColor}/>
      </div>

      {/* Grid cell spanning two columns for MainSettings */}
      <div className="md:col-span-2">
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

      {/* Grid cell spanning two columns for AccentSettings */}
      <div className="md:col-span-2">
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

      {/* Logo Preview Section */}
      <div className="md:col-span-2">
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
        />
      </div>

      {/* Randomize Button */}
      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          onClick={randomizeLogo}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Randomize Logo
        </button>
      </div>
    </div>
  );
};

export default Form;
