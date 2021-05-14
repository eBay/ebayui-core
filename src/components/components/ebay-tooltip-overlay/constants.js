exports.typeRoles = {
    tourtip: 'region',
    tooltip: 'tooltip',
};

exports.pointerStyles = {
    left: {
        transform: 'translateX(16px) translateY(-50%)',
        left: '100%',
        right: 'auto',
        top: '0',
        bottom: 'auto',
    },
    'left-top': {
        transform: 'translateX(16px)',
        left: '100%',
        right: 'auto',
        top: '-100%',
        bottom: 'auto',
    },
    'left-bottom': {
        transform: 'translateX(16px)',
        left: '100%',
        right: 'auto',
        top: 'auto',
        bottom: '-10px',
    },
    right: {
        transform: 'translateX(-16px) translateY(-50%)',
        left: 'auto',
        right: '100%',
        top: '0',
        bottom: 'auto',
    },
    'right-top': {
        transform: 'translateX(-16px)',
        left: 'auto',
        right: '100%',
        top: '-100%',
        bottom: 'auto',
    },
    'right-bottom': {
        transform: 'translateX(-16px)',
        left: 'auto',
        right: '100%',
        top: 'auto',
        bottom: '-50%',
    },
    top: {
        transform: 'translateX(-50%)',
        left: '50%',
        right: 'auto',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'top-left': {
        left: '-10px',
        right: 'auto',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'top-right': {
        left: 'auto',
        right: '-10px',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'bottom-right': {
        left: 'auto',
        right: '-10px',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
    'bottom-left': {
        left: '-10px',
        right: 'auto',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
    bottom: {
        transform: 'translateX(-50%)',
        left: '50%',
        right: 'auto',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
};
