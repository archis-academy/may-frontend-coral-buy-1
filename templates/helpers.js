/**
 * @param {String} el - DOM element to select
 * @returns {HTMLElement}  DOM element
 * */
export const getElement = (el) => document.querySelector(el);

/**
 * @param {String} el - DOM elements to select
 * @returns {NodeList}  an array of DOM elements
 * */
export const getElements = (el) => document.querySelectorAll(el);
