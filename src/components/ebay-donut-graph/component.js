import { DonutChartPathGenerator } from '../../common/charts/donut-chart';

export default {
    generator: null,
    handleKeydown(e) {
        if (e.keyCode === 9) {
            // if tab do nothing
            return;
        }
        let direction = 0;
        if (e.keyCode === 39) {
            // right arrow keyCode
            direction = 1;
        } else if (e.keyCode === 37) {
            // left arrow keyCode
            direction = -1;
        }
        const elements = document.querySelectorAll('.donut-graph__segment');
        let toFocus = 0;
        elements.forEach((el, i) => {
            if (document.activeElement === el) {
                el.blur();
                toFocus = i + direction;
                toFocus = toFocus > elements.length - 1 ? 0 : toFocus;
                toFocus = toFocus < 0 ? elements.length - 1 : toFocus;
            }
        });
        elements[toFocus].focus();
    },
    onCreate(input) {
        this.generator = new DonutChartPathGenerator(input);
        this.state = {
            containerId: `ebay-donut-graph-${this.id}`,
            portions: this.generator.portions,
            size: this.generator.size,
            focusIndex: -1,
            showToolTip: false,
            w: 200,
        };
    },
    onMount() {
        const container = document.querySelector('.donut-graph');
        this.state.size = container.getBoundingClientRect().width;
        this.generator.setSize(container.getBoundingClientRect().width);
        this.handleResize = this.handleResize.bind(this);
        window.addEventListener('resize', this.handleResize);
        this.forceUpdate();
    },
    handleResize() {
        const container = document.querySelector('.donut-graph');
        const w = container ? container.getBoundingClientRect().width : null;
        this.generator.setSize(w);
        this.state.size = w;
    },
    onInput(input) {
        this.generator.processInput(input);
        this.state.size = this.generator.size;
        this.state.portions = this.generator.portions;
        this.state.focusIndex = typeof input.focusIndex === 'number' ? input.focusIndex : -1;
    },
    getPortionShape(percentage, startIndex) {
        return this.generator.getPortionShape(percentage, startIndex);
    },
    handlePathFocus(e) {
        const id = typeof e === 'number' ? e : parseInt(e.target.getAttribute('data-id'), 10);
        this.state.focusIndex = id;
        this.emit('focus', id);
    },
    handlePathBlur() {
        this.state.showToolTip = false;
        this.state.focusIndex = -1;
        this.emit('blur');
    },
    setTooltipDirection(direction) {
        const tooltip = document.querySelector('.donut-graph__tooltip');
        const tooltipPointer = document.querySelector('.tooltip__pointer');
        if (direction === 'left') {
            if (!tooltip.classList.contains('donut-graph__tooltip--left')) {
                tooltip.classList.add('donut-graph__tooltip--left');
                tooltipPointer.classList.add('tooltip__pointer--left');
            }
        } else if (tooltip.classList.contains('donut-graph__tooltip--left')) {
            tooltip.classList.remove('donut-graph__tooltip--left');
            tooltipPointer.classList.remove('tooltip__pointer--left');
        }

        if (direction === 'right') {
            if (!tooltip.classList.contains('donut-graph__tooltip--right')) {
                tooltip.classList.add('donut-graph__tooltip--right');
                tooltipPointer.classList.add('tooltip__pointer--right');
            }
        } else if (tooltip.classList.contains('donut-graph__tooltip--right')) {
            tooltip.classList.remove('donut-graph__tooltip--right');
            tooltipPointer.classList.remove('tooltip__pointer--right');
        }

        if (direction === 'top') {
            if (!tooltip.classList.contains('donut-graph__tooltip--top')) {
                tooltip.classList.add('donut-graph__tooltip--top');
                tooltipPointer.classList.add('tooltip__pointer--top');
            }
        } else if (tooltip.classList.contains('donut-graph__tooltip--top')) {
            tooltip.classList.remove('donut-graph__tooltip--top');
            tooltipPointer.classList.remove('tooltip__pointer--top');
        }

        if (direction === 'bottom') {
            if (!tooltip.classList.contains('donut-graph__tooltip--bottom')) {
                tooltip.classList.add('donut-graph__tooltip--bottom');
                tooltipPointer.classList.add('tooltip__pointer--bottom');
            }
        } else if (tooltip.classList.contains('donut-graph__tooltip--bottom')) {
            tooltip.classList.remove('donut-graph__tooltip--bottom');
            tooltipPointer.classList.remove('tooltip__pointer--bottom');
        }
    },
    handleToolTip(e) {
        this.state.showToolTip = true;
        const tooltip = document.querySelector('.donut-graph__tooltip');
        if (tooltip) {
            const bb = tooltip.getBoundingClientRect();
            let x = e.clientX;
            let y = e.clientY + bb.height * 0.5 + 5;
            if (e.clientX + bb.width * 0.5 > window.innerWidth) {
                x = e.clientX - bb.width * 0.5 - 10;
                this.setTooltipDirection('right');
            } else if (e.clientX - bb.width * 0.5 < 0) {
                x = e.clientX + bb.width * 0.5 + 10;
                this.setTooltipDirection('left');
            } else if (e.clientY - bb.height - 10 < 0) {
                y = e.clientY + bb.height + 30;
                this.setTooltipDirection('top');
            } else {
                y = e.clientY;
                this.setTooltipDirection('bottom');
            }
            tooltip.style.top = `${y}px`;
            tooltip.style.left = `${x}px`;
        }
    },
};
