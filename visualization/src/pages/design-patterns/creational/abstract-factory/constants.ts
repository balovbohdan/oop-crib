import modernChairImage from './modern-chair.svg';
import modernSofaImage from './modern-sofa.svg';
import victorianChairImage from './victorian-chair.svg';
import victorianSofaImage from './victorian-sofa.svg';
import ukraineFlagImage from './ukraine-flag.svg';
import unitedKingdomFlagImage from './united-kingdom-flag.svg';
import norwayFlagImage from './norway-flag.svg';

export const TABS = {
  UML: 'UML',
  PLAIN: 'PLAIN',
  CODE: 'CODE',
};

export const FURNITURE_TYPES = {
  CHAIR: 'chair',
  SOFA: 'sofa',
};

export const FURNITURE_STYLES = {
  MODERN: 'modern',
  VICTORIAN: 'victorian',
};

export const FURNITURE_MATERIALS = {
  CHEAP: 'cheap',
  EXPENSIVE: 'expensive',
  LUXURY: 'luxury',
};

export const DELIVERY_LOCATIONS = {
  UKRAINE: 'Ukraine',
  UNITED_KINGDOM: 'United Kingom',
  NORWAY: 'Norway',
};

export const FURNITURE_TYPES_TO_COMPLEXITIES = {
  [FURNITURE_TYPES.CHAIR]: 2,
  [FURNITURE_TYPES.SOFA]: 3,
};

export const BASE_COSTS = {
  [FURNITURE_STYLES.MODERN]: 200,
  [FURNITURE_STYLES.VICTORIAN]: 100,
};

export const FURNITURE_MATERIALS_TO_COST_COEFFICIENTS = {
  [FURNITURE_MATERIALS.CHEAP]: 1,
  [FURNITURE_MATERIALS.EXPENSIVE]: 2,
  [FURNITURE_MATERIALS.LUXURY]: 3.5,
};

export const DELIVERY_LOCATIONS_TO_COST_COEFFICIENTS = {
  [DELIVERY_LOCATIONS.UKRAINE]: 1,
  [DELIVERY_LOCATIONS.UNITED_KINGDOM]: 1.5,
  [DELIVERY_LOCATIONS.NORWAY]: 3,
};

export const FURNITURE_PRODUCT_IMAGES = {
  victorian: {
    chair: victorianChairImage,
    sofa: victorianSofaImage,
  },
  modern: {
    chair: modernChairImage,
    sofa: modernSofaImage,
  },
};

export const FLAG_IMAGES = {
  [DELIVERY_LOCATIONS.UKRAINE]: ukraineFlagImage,
  [DELIVERY_LOCATIONS.UNITED_KINGDOM]: unitedKingdomFlagImage,
  [DELIVERY_LOCATIONS.NORWAY]: norwayFlagImage,
};
