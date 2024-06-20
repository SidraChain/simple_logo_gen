import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@mdi/react';

interface LogoPreviewProps {
  icon: { library: string, icon: any }; // This can be a FontAwesomeIcon or an MDI icon path
  iconSize: number;
  iconColor: string;
  text: string;
  fontFamily: string;
  fontSize: number;
  letterSpacing: number;
  isBold: boolean;
  color: string; // Main text color
  accentText: string;
  accentFontFamily: string;
  accentFontSize: number;
  accentLetterSpacing: number;
  isAccentBold: boolean;
  accentColor: string; // Accent text color
}

const LogoPreview: React.FC<LogoPreviewProps> = ({
  icon,
  iconSize,
  iconColor,
  text,
  fontFamily,
  fontSize,
  letterSpacing,
  isBold,
  color,
  accentText,
  accentFontFamily,
  accentFontSize,
  accentLetterSpacing,
  isAccentBold,
  accentColor
}) => {
  return (
    <div className="flex justify-around items-center my-8">
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Favicon</h2>
        <div className="w-16 h-16 flex justify-center items-center bg-gray-200 rounded-full">
          <div style={{ color: iconColor, fontSize: `${iconSize}px` }}>
            {icon.library === 'FontAwesome' ? (
              <FontAwesomeIcon icon={icon.icon} />
            ) : (
              <Icon path={icon.icon} size={iconSize / 24} />
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Logo</h2>
        <div className="flex items-center space-x-2">
          <div style={{ color: iconColor, fontSize: `${iconSize}px` }}>
            {icon.library === 'FontAwesome' ? (
              <FontAwesomeIcon icon={icon.icon} />
            ) : (
              <Icon path={icon.icon} size={iconSize / 24} />
            )}
          </div>
          <span
            style={{
              fontFamily,
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
              fontWeight: isBold ? 'bold' : 'normal',
              color
            }}
          >
            {text}
          </span>
          <span
            style={{
              fontFamily: accentFontFamily,
              fontSize: `${accentFontSize}px`,
              letterSpacing: `${accentLetterSpacing}px`,
              fontWeight: isAccentBold ? 'bold' : 'normal',
              color: accentColor,
              backgroundColor: color,
              padding: '0 4px',
              borderRadius: '4px'
            }}
          >
            {accentText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
