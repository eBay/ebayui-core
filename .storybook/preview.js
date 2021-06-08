import './custom-styles.less';
if (process.env.DS !== '4') {
    require('@ebay/skin/marketsans');
}

require('@ebay/skin/global');

export const parameters = {
    layout: 'centered',
    controls: { expanded: true },
};
