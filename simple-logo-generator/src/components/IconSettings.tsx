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
  setIcon:  (icon: any) => void
  iconSize: number
  setIconSize: (size: number) => void
  iconColor: string
  setIconColor: (color: string) => void
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
    setIcon(icon)
    if (icon) {
      // Update icons with the selected color
      icon.color = iconColor; // Assign the selected color to the icon
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg">
      <div className="mb-4">
        <label className="block mb-2">Icon</label>
        <CustomDropdown icons={filteredIcons} onChange={handleIconChange} iconSize="lg" iconColor={iconColor} />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block mb-2 w-1/4">Size</label>
        <input type="range" className="form-range w-1/2 mx-2" min="12" max="94" step="1" value={iconSize} onChange={(e) => setIconSize(Number(e.target.value))} />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block mb-2 w-1/4">Color</label>
        <input type="color" className="w-10 h-10 p-0 border-none" value={iconColor} onChange={(e) => setIconColor(e.target.value)} />
      </div>
    </div>
  );
};

export default IconSettings;
