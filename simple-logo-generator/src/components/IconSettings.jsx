import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@mdi/react';
import { faIcons } from './faIcons';
import { mdiIcons } from './mdiIcons';
import CustomDropdown from './CustomDropdown';

const IconSettings = ({ setIcon, iconSize, setIconSize, iconColor, setIconColor, icon }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const combinedIcons = useMemo(() => [...faIcons, ...mdiIcons], []);

  const filteredIcons = useMemo(
    () => combinedIcons.filter((icon) =>
      icon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [searchTerm, combinedIcons]
  );

  return (
    <div className="flex flex-col p-6  rounded-lg space-y-8">
      <div>
        <label className="block text-lg font-medium text-gray-800 mb-1">Icon</label>
        <CustomDropdown 
          icons={filteredIcons} 
          onChange={setIcon} 
          iconSize={iconSize} 
          iconColor={iconColor}
        />
<div className="mt-2 flex items-center space-x-2 bg-white p-2 rounded border border-gray-200 p-9">
  {icon.library === 'FontAwesome' ? (
    <FontAwesomeIcon icon={icon.icon} style={{ fontSize: `${iconSize}px`, color: iconColor, filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))' }} />
  ) : (
    <Icon path={icon.icon} size={iconSize / 24} color={iconColor} style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))' }} />
  )}
  <span className="font-medium text-gray-600">{icon.name}</span>
</div>

      </div>
      <div>
        <label className="block text-lg font-medium text-gray-800 mb-1">Size</label>
        <div className="flex items-center space-x-4">
          <input 
            type="range" 
            className="form-range appearance-none w-full h-2 bg-gray-300 rounded-full cursor-pointer transition-colors hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400" 
            min="12" 
            max="94" 
            step="1" 
            value={iconSize} 
            onChange={(e) => setIconSize(Number(e.target.value))}
          />
          <span className="text-gray-800">{iconSize}px</span>
        </div>
      </div>
      <div>
        <label className="block text-lg font-medium text-gray-800 mb-1">Color</label>
        <input 
          type="color" 
          className="w-full h-10 p-0 border-none rounded-md cursor-pointer transition-colors hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          value={iconColor} 
          onChange={(e) => setIconColor(e.target.value)}
        />
      </div>
    </div>
  );
};

export default IconSettings;
