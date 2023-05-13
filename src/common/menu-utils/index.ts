export interface MenuItem extends Omit<Marko.Input<'button'>, `on${string}`> {
    href?: string;
    value?: string;
    renderBody?: Marko.Body;
    separator?: boolean;
    checked?: boolean;
    badgeNumber?: number | string;
}

export interface MenuInput {
    items?: Marko.RepeatableAttrTag<MenuItem>;
    type?: string;
}
export interface MenuState {
    checkedIndex?: number;
    checkedItems?: boolean[];
}

export class MenuUtils<Input extends MenuInput, State extends MenuState> extends Marko.Component<
    Input,
    State
> {
    declare type?: string;
    declare items: Extract<Input['items'], any[]>[number][];

    isRadio() {
        return this.type === 'radio';
    }

    getCheckedValues() {
        if (this.isRadio()) {
            const item = this.items[this.state.checkedIndex!] || {};
            return [item.value];
        }
        return this.items
            .filter((item, index) => this.state.checkedItems![index])
            .map((item) => item.value);
    }

    getCheckedIndexes() {
        if (this.isRadio()) {
            return this.state.checkedIndex === undefined ? undefined : [this.state.checkedIndex];
        }
        return this.items
            .map((item, i) => this.state.checkedItems![i] && i)
            .filter((item) => item !== false && item !== undefined) as number[];
    }

    getInputState(input: Input) {
        /* 
            ebay-menu uses separators and we need to exclude these 
            from items to pass correct indexes to state
            Any other component that doesn't have separator should pass through
        */
        this.items = ((input.items as Marko.AttrTag<MenuItem>[]) || []).filter(
            (item) => !item.separator
        );
        this.type = input.type;
        if (this.isRadio()) {
            return {
                checkedIndex: (this.items || []).findIndex((item) => item.checked || false),
            };
        }
        return {
            checkedItems: (this.items || []).map((item) => item.checked || false),
        };
    }

    isChecked(index: number) {
        if (this.isRadio()) {
            return index === this.state.checkedIndex;
        }
        return this.state.checkedItems![index];
    }

    isDisabled(index: number) {
        return this.items[index].disabled;
    }

    toggleChecked(index: number | number[]) {
        if (Array.isArray(index)) {
            if (this.isRadio()) {
                this.state.checkedIndex = index[0];
            } else {
                this.state.checkedItems = this.state.checkedItems!.map(
                    (item, i) => index.indexOf(i) !== -1
                );
            }
            return;
        }

        if (this.isRadio() && index !== this.state.checkedIndex) {
            this.state.checkedIndex = index;
        } else if (this.type !== 'radio') {
            this.state.checkedItems![index] = !this.state.checkedItems![index];
            this.setStateDirty('checkedItems');
        }
    }

    getSeparatorMap(input: Input) {
        let separatorCount = 0;
        return ((input.items as MenuItem[]) || []).reduce((map, item, index) => {
            if (item.separator) {
                map[index - separatorCount] = true;
                separatorCount++;
            }
            return map;
        }, {});
    }
}

export default function setupMenu(instance: any) {
    Object.defineProperties(instance, Object.getOwnPropertyDescriptors(MenuUtils.prototype));
}
