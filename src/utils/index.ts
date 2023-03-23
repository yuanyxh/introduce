/**
 * @description 偏函数应用
 * @param {Function} fun
 * @param {...unknown} partialArgs
 * @returns
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function partial<T extends (...args: any) => any>(
  fun: T,
  ...partialArgs: Parameters<T>
) {
  /**
   * @description 偏函数实现
   * @param {...unknown} innerArgs
   * @returns {ReturnType<T>}
   */
  return function (this: unknown, ...innerArgs: unknown[]): ReturnType<T> {
    const args = [...partialArgs];

    let arg = 0;

    for (let i = 0; i < args.length && arg < innerArgs.length; i++) {
      if (args[i] === undefined) {
        args[i] = innerArgs[arg++];
      }
    }

    return fun.apply(this, args);
  };
}

export { default as Element } from './Element';
export { default as className } from './className';
