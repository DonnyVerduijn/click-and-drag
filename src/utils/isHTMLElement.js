
export default o =>
  (typeof document.HTMLElement === 'object'
    ? o instanceof document.HTMLElement // DOM2
    : o &&
      typeof o === 'object' &&
      o !== null &&
      o.nodeType === 1 &&
      typeof o.nodeName === 'string');
