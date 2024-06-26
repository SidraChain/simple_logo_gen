import React from 'react';

interface GlobalSettingsProps {
  layoutHorizontal: boolean;
  setLayoutHorizontal: (horizontal: boolean) => void;
  shapesOn: boolean;
  setShapesOn: (on: boolean) => void;
  offsetSize: number;
  setOffsetSize: (size: number) => void;
  offsetColor: string;
  setOffsetColor: (color: string) => void;
  shapeColor: string; // New state for shape color
  setShapeColor: (color: string) => void; // Setter for shape color
  backgroundColorLogo: string; // New state for logo background color
  setBackgroundColorLogo: (color: string) => void; // Setter for logo background color
  horizontalPadding: number; // New state for horizontal padding
  setHorizontalPadding: (padding: number) => void; // Setter for horizontal padding
  verticalPadding: number; // New state for vertical padding
  setVerticalPadding: (padding: number) => void; // Setter for vertical padding
}

const GlobalSettings: React.FC<GlobalSettingsProps> = ({
  layoutHorizontal,
  setLayoutHorizontal,
  shapesOn,
  setShapesOn,
  offsetSize,
  setOffsetSize,
  offsetColor,
  setOffsetColor,
  shapeColor,
  setShapeColor,
  backgroundColorLogo,
  setBackgroundColorLogo,
  horizontalPadding,
  setHorizontalPadding,
  verticalPadding,
  setVerticalPadding,
}) => {
  const handleLayoutToggle = () => {
    setLayoutHorizontal(!layoutHorizontal);
  };

  return (
    <div className="flex-1 p-6 bg-gray-900 text-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Global Settings</h2>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Layout</label>
        <button 
          className={`w-full p-3 rounded-lg transition-colors ${layoutHorizontal ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500`}
          onClick={handleLayoutToggle}
        >
          {layoutHorizontal ? 'Horizontal' : 'Vertical'}
        </button>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Shapes</label>
        <button 
          className={`w-full p-3 rounded-lg transition-colors ${shapesOn ? 'bg-blue-600' : 'bg-gray-700'} hover:bg-blue-500`}
          onClick={() => setShapesOn(!shapesOn)}
        >
          {shapesOn ? 'On' : 'Off'}
        </button>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Offset</label>
        <div className="flex items-center">
          <input 
            type="color" 
            className="w-12 h-12 p-0 border-none rounded-lg mr-4 cursor-pointer" 
            value={offsetColor} 
            onChange={(e) => setOffsetColor(e.target.value)} 
          />
          <input 
            type="range" 
            className="form-range w-full" 
            min="0" 
            max="10" 
            step="0.5" 
            value={offsetSize} 
            onChange={(e) => setOffsetSize(Number(e.target.value))} 
          />
          <span className="ml-4">{offsetSize}</span>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Shape Color</label>
        <input
          type="color"
          value={shapeColor}
          onChange={(e) => setShapeColor(e.target.value)}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Background Color for Logo</label>
        <input
          type="color"
          value={backgroundColorLogo}
          onChange={(e) => setBackgroundColorLogo(e.target.value)}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Horizontal Padding</label>
        <input
          type="range"
          min="0"
          max="100"
          step="0.5"
          value={horizontalPadding}
          onChange={(e) => setHorizontalPadding(Number(e.target.value))}
          className="form-range w-full"
        />
        <span className="ml-4">{horizontalPadding}</span>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Vertical Padding</label>
        <input
          type="range"
          min="0"
          max="100"
          step="0.5"
          value={verticalPadding}
          onChange={(e) => setVerticalPadding(Number(e.target.value))}
          className="form-range w-full"
        />
        <span className="ml-4">{verticalPadding}</span>
      </div>
    </div>
  );
};

export default GlobalSettings;
