import * as eventUtils from '../../common/event-utils';

export default {
    onCreate() {
        this.state = {
            open: false,
        };
    },
    onInput(input) {
        if (input.open === true || input.open === false) {
            this.state.open = input.open;
        }
    },
    handleExpand() {
        this.state.open = true;
        this.emit('expand');
    },
    handleCollapse() {
        this.state.open = false;
        this.emit('collapse');
    },
    handleKeydown(e) {
        eventUtils.handleEscapeKeydown(e, () => {
            this.state.open = false;
        });
    },
};
