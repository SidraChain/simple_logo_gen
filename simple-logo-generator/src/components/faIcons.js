import * as IconsFa from '@fortawesome/free-solid-svg-icons';

export const faIcons = Object.keys(IconsFa)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(icon => ({
    icon: IconsFa[icon],
    name: icon.replace('fa', ''),
    library: 'FontAwesome'
  }));