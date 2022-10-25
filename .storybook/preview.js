import './custom-styles.less';
// import '@ebay/skin/tokens';
import '../../skin/dist/tokens/evo-core.css';
import '../../skin/dist/tokens/evo-light.css';
import '../../skin/dist/tokens/evo-dark.css';
import '@ebay/skin/global';
import '@ebay/skin/marketsans';
import order from './storyOrder';

export const parameters = {
    layout: 'centered',
    controls: { expanded: true },
    options: {
        storySort: { order },
    },
};
