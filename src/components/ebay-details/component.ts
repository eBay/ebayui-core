interface Input extends Marko.Input<'details'> {
    toJSON?: any;
    text: string;
    size?: 'regular' | 'small';
    alignment?: 'regular' | 'center';
    as?: keyof Marko.NativeTags;
}

export default class extends Marko.Component<Input> {
    toggleDetails(ev: Event) {
        this.emit('toggle', {
            originalEvent: ev,
            open: (this.getEl('root') as HTMLDetailsElement).open,
        });
    }
    clickDetails(ev: MouseEvent) {
        this.emit('click', { originalEvent: ev });
    }
}
