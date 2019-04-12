exports.typeRoles = {
  tourtip: 'region',
  tooltip: 'tooltip'
};

exports.pointerStyles = {
  'left': {
      transform: 'translateX(16px) translateY(-50%)',
      left: '100%',
      right: 'auto',
      top: '50%',
      bottom: 'auto'
  },
  'left-top': {
      transform: 'translateX(16px)',
      left: '100%',
      right: 'auto',
      top: '-8px',
      bottom: 'auto'
  },
  'left-bottom': {
      transform: 'translateX(16px)',
      left: '100%',
      right: 'auto',
      top: 'auto',
      bottom: '-8px'
  },
  'right': {
      transform: 'translateX(-16px) translateY(-50%)',
      left: 'auto',
      right: '100%',
      top: '50%',
      bottom: 'auto'
  },
  'right-top': {
      transform: 'translateX(-16px)',
      left: 'auto',
      right: '100%',
      top: '-8px',
      bottom: 'auto'
  },
  'right-bottom': {
      transform: 'translateX(-16px)',
      left: 'auto',
      right: '100%',
      top: 'auto',
      bottom: '-8px'
  },
  'top': {
      transform: 'translateX(-50%)',
      left: '50%',
      right: 'auto',
      top: 'calc(100% + 16px)',
      bottom: 'auto'
  },
  'top-left': {
      left: '0px',
      right: 'auto',
      top: 'calc(100% + 16px)',
      bottom: 'auto'
  },
  'top-right': {
      left: 'auto',
      right: '0px',
      top: 'calc(100% + 16px)',
      bottom: 'auto'
  },
  'bottom-right': {
      left: 'auto',
      right: '0px',
      top: 'auto',
      bottom: 'calc(100% + 16px)'
  },
  'bottom-left': {
      left: '0px',
      right: 'auto',
      top: 'auto',
      bottom: 'calc(100% + 16px)'
  },
  'bottom': {
      transform: 'translateX(-50%)',
      left: '50%',
      right: 'auto',
      top: 'auto',
      bottom: 'calc(100% + 16px)'
  }
}