exports.typeRoles = {
    tourtip: 'region',
    tooltip: 'tooltip',
};

// Added scale3d for safari to trigger gpu rerendering to fix a bug with filter
exports.pointerStyles = {
    left: {
        transform: 'translateX(16px) translateY(-50%) scale3d(1,1,1)',
        left: '100%',
        right: 'auto',
        top: '-6px',
        bottom: 'auto',
    },
    'left-top': {
        transform: 'translateX(16px) scale3d(1,1,1)',
        left: '100%',
        right: 'auto',
        top: '-100%',
        bottom: 'auto',
    },
    'left-bottom': {
        transform: 'translateX(16px) scale3d(1,1,1)',
        left: '100%',
        right: 'auto',
        top: 'auto',
        bottom: '-10px',
    },
    right: {
        transform: 'translateX(-16px) translateY(-50%) scale3d(1,1,1)',
        left: 'auto',
        right: '100%',
        top: '-6px',
        bottom: 'auto',
    },
    'right-top': {
        transform: 'translateX(-16px) scale3d(1,1,1)',
        left: 'auto',
        right: '100%',
        top: '-100%',
        bottom: 'auto',
    },
    'right-bottom': {
        transform: 'translateX(-16px) scale3d(1,1,1)',
        left: 'auto',
        right: '100%',
        top: 'auto',
        bottom: '-50%',
    },
    top: {
        transform: 'translateX(-50%) scale3d(1,1,1)',
        left: '50%',
        right: 'auto',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'top-left': {
        transform: 'scale3d(1,1,1)',
        left: '-10px',
        right: 'auto',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'top-right': {
        transform: 'scale3d(1,1,1)',
        left: 'auto',
        right: '-10px',
        top: 'calc(100% + 2px)',
        bottom: 'auto',
    },
    'bottom-right': {
        transform: 'scale3d(1,1,1)',
        left: 'auto',
        right: '-10px',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
    'bottom-left': {
        transform: 'scale3d(1,1,1)',
        left: '-10px',
        right: 'auto',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
    bottom: {
        transform: 'translateX(-50%) scale3d(1,1,1)',
        left: '50%',
        right: 'auto',
        top: 'auto',
        bottom: 'calc(100% + 12px)',
    },
};
