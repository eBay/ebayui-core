// Adds an style to the document which forces all transitions to run more quickly for the tests.
const style = document.createElement('style');
style.innerHTML = `* { transition-duration: 0.1s !important; }`;
document.head.appendChild(style);
