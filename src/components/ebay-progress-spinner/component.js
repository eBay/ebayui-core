const standard = 'https://ir.ebaystatic.com/cr/v/c1/skin/svg/spinner/v2/spinner-small.svg';
const large = 'https://ir.ebaystatic.com/cr/v/c1/skin/svg/spinner/v2/spinner-large.svg';
const standardDark = 'https://ir.ebaystatic.com/cr/v/c1/skin/svg/spinner/v2/spinner-dark-mode.svg';
const largeDark =
    'https://ir.ebaystatic.com/cr/v/c1/skin/svg/spinner/v2/spinner-large-dark-mode.svg';

module.exports = class {
    // This is done because there are issues in css backgorund-image which tries to parse this file
    // This is a way to make it work without using CSS
    onCreate() {
        this.state = {
            dark: false,
        };
    }
    onMount() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.state.dark = true;
        } else {
            this.state.dark = false;
        }
    }
    getIcon(input) {
        let current = standard;
        if (this.state.dark) {
            current = standardDark;
            if (input.size === 'large') {
                current = largeDark;
            }
        } else if (input.size === 'large') {
            current = large;
        }
        return current;
    }
};
