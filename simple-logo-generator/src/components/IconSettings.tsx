import React, { useState, useMemo } from 'react';
import { faIcons } from './faIcons';
import { mdiIcons } from './mdiIcons';
import CustomDropdown from './CustomDropdown'; // Ensure this is correctly imported

interface Icon {
  icon: any;  // Adjust the type according to what FontAwesome and MDI use
  name: string;
  library: 'FontAwesome' | 'MDI';
  color?: string;  // Optional color property for icons
}

interface IconSettingsProps {
  setIcon: (icon: any) => void;
  iconSize: number;
  setIconSize: (size: number) => void;
  iconColor: string;
  setIconColor: (color: string) => void;
}

const IconSettings: React.FC<IconSettingsProps> = ({
  setIcon,
  iconSize,
  setIconSize,
  iconColor,
  setIconColor
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // ToDo: load mdi icons also , ...mdiIcons
  const combinedIcons = useMemo(() => [...faIcons], []);
  const filteredIcons = useMemo(() => combinedIcons.filter(icon => 
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm, combinedIcons]);

  const handleIconChange = (icon: Icon): void => {
    setIcon(icon);
    if (icon) {
      // Update icons with the selected color
      icon.color = iconColor; // Assign the selected color to the icon
    }
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Icon Settings</h2>
       
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Icon</label>
        <CustomDropdown 
          icons={filteredIcons} 
          onChange={handleIconChange} 
          iconSize="lg" 
          iconColor={iconColor} 
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Size</label>
        <div className="flex items-center">
          <input 
            type="range" 
            defaultValue={50} 
            className="form-range w-full" 
            min="12" 
            max="94" 
            step="1" 
            value={iconSize} 
            onChange={(e) => setIconSize(Number(e.target.value))} 
          />
          <span className="ml-4">{iconSize}</span>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Color</label>
        <input 
          type="color" 
          className="w-12 h-12 p-0 border-none rounded-lg cursor-pointer" 
          value={iconColor} 
          onChange={(e) => setIconColor(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default IconSettings;
