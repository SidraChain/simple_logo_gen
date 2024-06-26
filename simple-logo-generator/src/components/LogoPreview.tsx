import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@mdi/react';
import domtoimage from 'dom-to-image';

interface LogoPreviewProps {
  icon: { library: string, icon: any };
  iconSize: number;
  iconColor: string;
  text: string;
  fontFamily: string;
  fontSize: number;
  letterSpacing: number;
  isBold: boolean;
  color: string;
  accentText: string;
  accentFontFamily: string;
  accentFontSize: number;
  accentLetterSpacing: number;
  isAccentBold: boolean;
  accentColor: string;
  layoutHorizontal: boolean;
  shapesOn: boolean;
  offsetSize: number;
  offsetColor: string;
  shapeColor: string;
  backgroundColorLogo: string; // New prop for background color of the logo
  horizontalPadding: number; // New prop for horizontal padding
  verticalPadding: number; // New prop for vertical padding
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
  accentColor,
  layoutHorizontal,
  shapesOn,
  offsetSize,
  offsetColor,
  shapeColor,
  backgroundColorLogo,
  horizontalPadding,
  verticalPadding
}) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (previewRef.current) {
      const scale = 1; // Increase scale for higher resolution
      const options = {
        width: previewRef.current.offsetWidth * scale,
        height: previewRef.current.offsetHeight * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        },
        quality: 1,
      };

      domtoimage.toBlob(previewRef.current, options)
        .then((blob: any) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'logo-preview.png';
          a.click();
        });
    }
  };

  return (
    <div className="flex flex-col items-center my-8 space-y-6">
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Logo</h2>
        <div
          ref={previewRef}
          className={`flex ${layoutHorizontal ? 'flex-row' : 'flex-col'} items-center space-x-2 transform scale-50 sm:scale-100`}
          style={{
            backgroundColor: backgroundColorLogo,
            padding: `${verticalPadding}px ${horizontalPadding}px`,
          }}
        >
          <div style={{ color: iconColor, fontSize: `${iconSize}px`, offset: offsetSize }}>
            {icon.library === 'FontAwesome' ? (
              <FontAwesomeIcon icon={icon.icon} />
            ) : (
              <Icon path={icon.icon} size={iconSize / 24} />
            )}
          </div>
          <span
            style={{
              fontFamily:fontFamily,
              fontSize: `${fontSize}px`,
              letterSpacing: `${letterSpacing}px`,
              fontWeight: isBold ? 'bold' : 'normal',
              color,
              textShadow: `${offsetSize}px ${offsetSize}px ${offsetColor}`,
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
              backgroundColor: shapesOn ? shapeColor : 'transparent',
              padding: '0 4px',
              borderRadius: '4px',
            }}
          >
            {accentText}
          </span>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Download Image
      </button>
      <hr className="w-full border-gray-200 mb-4 my-10" /> {/* Divider */}
    </div>
  );
};

export default LogoPreview;
