const findIndex = require('core-js-pure/features/array/find-index');

function isRadio() {
    return this.type === 'radio';
}

function getCheckedValues() {
    if (this.isRadio()) {
        const item = this.input.items[this.state.checkedIndex] || {};
        return [item.value];
    }
    return this.input.items
        .filter((item, index) => this.state.checkedItems[index])
        .map(item => item.value);
}

function getCheckedIndexes() {
    if (this.isRadio()) {
        return [this.state.checkedIndex];
    }
    return this.input.items
        .map((item, i) => this.state.checkedItems[i] && i)
        .filter(item => item !== false && typeof item !== 'undefined');
}

function getInputState(input) {
    this.type = input.type;
    if (this.isRadio()) {
        return {
            checkedIndex: findIndex(input.items || [], item => item.checked || false)
        };
    }
    return {
        checkedItems: (input.items || []).map(item => item.checked || false)
    };
}

function isChecked(index) {
    if (this.isRadio()) {
        return index === this.state.checkedIndex;
    }
    return this.state.checkedItems[index];
}

function toggleChecked(index) {
    if (Array.isArray(index)) {
        if (this.isRadio()) {
            this.state.checkedIndex = index[0];
        } else {
            this.state.checkedItems = this.state.checkedItems.map((item, i) => index.indexOf(i) !== -1);
        }
        return;
    }

    if (this.isRadio() && index !== this.state.checkedIndex) {
        this.state.checkedIndex = index;
    } else if (this.type !== 'radio') {
        this.state.checkedItems[index] = !this.state.checkedItems[index];
        this.setStateDirty('checkedItems');
    }
}

module.exports = {
    isRadio,
    getInputState,
    isChecked,
    getCheckedIndexes,
    getCheckedValues,
    toggleChecked
};
