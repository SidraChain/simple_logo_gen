import React, { useState } from 'react';

const GlobalSettings: React.FC = () => {
  const [layoutHorizontal, setLayoutHorizontal] = useState(true);
  const [shapesOn, setShapesOn] = useState(false);
  const [offsetSize, setOffsetSize] = useState(5.5);
  const [offsetColor, setOffsetColor] = useState("#f2f2f2");

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Global</h2>
        <button className="p-1 bg-gray-700 rounded-full">
          <i className="fas fa-chevron-up text-xs"></i>
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Layout</label>
        <button className={`w-full p-2 rounded-md ${layoutHorizontal ? 'bg-blue-500' : 'bg-gray-700'}`} onClick={() => setLayoutHorizontal(!layoutHorizontal)}>
          {layoutHorizontal ? 'Horizontal' : 'Vertical'}
        </button>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Shapes</label>
        <button className={`w-full p-2 rounded-md ${shapesOn ? 'bg-blue-500' : 'bg-gray-700'}`} onClick={() => setShapesOn(!shapesOn)}>
          {shapesOn ? 'On' : 'Off'}
        </button>
      </div>
      <div className="mb-4 flex items-center">
        <label className="block mb-2 w-1/4">Offset</label>
        <input type="color" className="w-10 h-10 p-0 border-none rounded-md" value={offsetColor} onChange={(e) => setOffsetColor(e.target.value)} />
        <input type="range" className="form-range w-1/2 mx-2" min="0" max="10" step="0.5" value={offsetSize} onChange={(e) => setOffsetSize(Number(e.target.value))} />
        <span>{offsetSize}</span>
      </div>
    </div>
  );
};

export default GlobalSettings;
