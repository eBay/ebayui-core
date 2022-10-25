import { numberReg } from '../../common/charts/donut-chart';

export default {
    generator: null,
    onCreate(input) {
        let portions = input.portions.map((p) => ({
            rawValue: p.value,
            value: p.value.match(numberReg).map((v) => parseFloat(v))[0],
            text: p.text,
        }));
        const total = portions.reduce((p, c) => p + c.value, 0);
        portions = portions.map((p) => ({
            ...p,
            percentage: p.value / total,
        }));

        this.state = {
            containerId: `ebay-donut-chart-${this.id}`,
            portions,
            focusIndex: -1,
        };
    },
    onInput(input) {
        let portions = input.portions.map((p) => ({
            rawValue: p.value,
            value: p.value.match(numberReg).map((v) => parseFloat(v))[0],
            text: p.text,
        }));
        const total = portions.reduce((p, c) => p + c.value, 0);
        portions = portions.map((p) => ({
            ...p,
            percentage: p.value / total,
        }));
        this.state.portions = portions;
        if (this.forceUpdate) {
            this.forceUpdate();
        }
    },
    handlePathFocus(e) {
        const id = typeof e === 'number' ? e : parseInt(e.target.getAttribute('data-id'), 10);
        this.state.focusIndex = id;
    },
    handlePathBlur() {
        this.state.focusIndex = -1;
    },
};
