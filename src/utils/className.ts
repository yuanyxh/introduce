import { ClassName } from '../types/index';

const className: ClassName = {
  /**
   * @description add a or more category names
   * @param {string} target target className
   * @param {string} className added className
   */
  addClass(target, className) {
    return target + ' ' + className;
  },
  /**
   * @description add a or more category names
   * @param {string} target target className
   * @param {string} className added className
   */
  toggleClass(target, className) {
    const names = target.split(/\s+/);
    const index = names.indexOf(className);
    index >= 0 ? names.splice(index, 1) : names.push(className);

    return names.join(' ');
  }
};

export default className;
