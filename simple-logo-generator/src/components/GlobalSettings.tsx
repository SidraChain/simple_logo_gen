import React from 'react';

interface GlobalSettingsProps {
  layoutHorizontal: boolean;
  setLayoutHorizontal: (horizontal: boolean) => void;
 
  offsetSize: number;
  setOffsetSize: (size: number) => void;
  offsetColor: string;
  setOffsetColor: (color: string) => void;

  backgroundColorLogo: string;
  setBackgroundColorLogo: (color: string) => void;
  horizontalPadding: number;
  setHorizontalPadding: (padding: number) => void;
  verticalPadding: number;
  setVerticalPadding: (padding: number) => void;
}

const GlobalSettings: React.FC<GlobalSettingsProps> = ({
  layoutHorizontal,
  setLayoutHorizontal,

  offsetSize,
  setOffsetSize,
  offsetColor,
  setOffsetColor,
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
    <div className="flex-1 p-6 bg-white text-gray-900 rounded-xl">

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Layout</label>
        <button 
          className={`w-full p-3 rounded-lg transition-colors ${layoutHorizontal ? 'bg-blue-500' : 'bg-gray-300'} hover:bg-blue-400 text-white`}
          onClick={handleLayoutToggle}
        >
          {layoutHorizontal ? 'Horizontal' : 'Vertical'}
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Offset Size</label>
        <input 
          type="range" 
          className="form-range w-full"
          min="0"
          max="50"
          step="1"
          value={offsetSize}
          onChange={(e) => setOffsetSize(Number(e.target.value))}
        />
        <span className="ml-4 text-gray-800">{offsetSize}px</span>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Offset Color</label>
        <input 
          type="color" 
          className="w-full h-12 p-0 border-none rounded-lg cursor-pointer" 
          value={offsetColor} 
          onChange={(e) => setOffsetColor(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Background Color for Logo</label>
        <input 
          type="color"
          className="w-full h-12 p-0 border-none rounded-lg cursor-pointer"
          value={backgroundColorLogo}
          onChange={(e) => setBackgroundColorLogo(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Horizontal Padding</label>
        <input 
          type="range"
          className="form-range w-full"
          min="0"
          max="100"
          step="0.5"
          value={horizontalPadding}
          onChange={(e) => setHorizontalPadding(Number(e.target.value))}
        />
        <span className="ml-4 text-gray-800">{horizontalPadding}px</span>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Vertical Padding</label>
        <input 
          type="range"
          className="form-range w-full"
          min="0"
          max="100"
          step="0.5"
          value={verticalPadding}
          onChange={(e) => setVerticalPadding(Number(e.target.value))}
        />
        <span className="ml-4 text-gray-800">{verticalPadding}px</span>
      </div>
    </div>
  );
};

export default GlobalSettings;
