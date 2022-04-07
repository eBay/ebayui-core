export default class {
    toggleDetails(ev) {
        this.emit('toggle', { originalEvent: ev, open: this.getEl('root').open });
    }
    clickDetails(ev) {
        this.emit('click', { originalEvent: ev });
    }
}
