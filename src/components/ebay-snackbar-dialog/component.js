const DEFAULT_TIMEOUT_LENGTH = 6000;
module.exports = {
    onInput(input) {
        clearTimeout(this.timeout);
        clearInterval(this.interval);
        if (input.open !== false) {
            clearTimeout(this.timeout);
            const timeout = setTimeout(() => {
                if (
                    document
                        .querySelector('.fake-link.snackbar-dialog__cta.btn.btn--secondary')
                        .isEqualNode(document.activeElement) ||
                    Array.from(document.querySelectorAll(':hover')).includes(
                        document.querySelector('.fake-link.snackbar-dialog__cta.btn.btn--secondary')
                    )
                ) {
                    this.interval = setInterval(() => {
                        if (
                            !(
                                document
                                    .querySelector(
                                        '.fake-link.snackbar-dialog__cta.btn.btn--secondary'
                                    )
                                    .isEqualNode(document.activeElement) ||
                                Array.from(document.querySelectorAll(':hover')).includes(
                                    document.querySelector(
                                        '.fake-link.snackbar-dialog__cta.btn.btn--secondary'
                                    )
                                )
                            )
                        ) {
                            this.emit('close');
                            clearInterval(this.interval);
                        }
                    }, 1000);
                } else {
                    this.emit('close');
                }
            }, input.timeout || DEFAULT_TIMEOUT_LENGTH);
            this.timeout = timeout;
        }
    },
    onDestroy() {
        clearTimeout(this.timeout);
        clearInterval(this.interval);
    },
};
