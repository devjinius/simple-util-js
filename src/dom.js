export const isContainClass = (target, className) => target.classList.contains(className);

HTMLElement.prototype.qs = className => document.querySelector(className);
HTMLElement.prototype.qsa = className => document.querySelectorAll(className);
export const qs = className => document.querySelector(className);
export const qsa = className => document.querySelectorAll(className);

export const removeNodes = items => {
  items.forEach(item => item.remove());
};
