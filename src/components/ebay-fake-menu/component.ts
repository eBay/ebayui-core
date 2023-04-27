import { AttrClass, AttrString, AttrStyle } from 'marko/tags-html';
import * as eventUtils from '../../common/event-utils';
import MenuUtils, { type MenuItem, type MenuInput, type MenuState } from '../../common/menu-utils';

interface Item extends MenuItem {
    disabled?: boolean;
    itemMatchesUrl?: boolean;
    current?: string;
    badgeNumber?: number;
}

interface Input extends MenuInput {
    items: Item[];
    classPrefix?: string;
    reverse?: boolean;
    fixWidth?: boolean;
    class?: AttrClass;
    style?: AttrStyle;
}

export default class FakeMenu extends MenuUtils<Input, MenuState> {
    handleItemClick(index: number, originalEvent: MouseEvent, el: HTMLElement) {
        this.emitComponentEvent({ eventType: 'select', el, originalEvent, index });
    }

    handleItemKeydown(index: number, originalEvent: KeyboardEvent, el: HTMLElement) {
        eventUtils.handleEscapeKeydown(originalEvent, () => {
            this.emitComponentEvent({ eventType: 'keydown', el, originalEvent, index });
        });
    }

    emitComponentEvent({ eventType, el, originalEvent, index }) {
        const eventObj = {
            el,
            originalEvent,
            index,
        };

        this.emit(`${eventType}`, eventObj);
    }

    onInput(input: Input) {
        this.items = (input.items || []).filter((item) => !item.separator);
    }

    getSeparatorMap(input: Input) {
        return super.getSeparatorMap(input);
    }
}
