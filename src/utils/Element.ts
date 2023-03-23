import type { Element as TElement } from '../types/Element';

const Element: TElement = {
  /**
   *  @description 获取含有指定类的元素
   * @param {HTMLElement | null} target
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  getElement(target, className) {
    if (!target) return null;
    let current: HTMLElement | null = target;
    while (current) {
      if (current.classList.contains(className)) return current;
      current = current.parentElement;
    }

    return current;
  }
};

export default Element;
