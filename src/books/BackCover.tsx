import React from 'react';
import './BackCover.css';

export default function BackCover() {
  return (
    <div className="page last">
      {/* 正面 */}
      <div className="front">
        <div className="quotes">
          <h2>Favorite quotes</h2>
          <div className="block">
            <p className="favorite-quotes">
              请不要用你的想法来揣测我，我本身就是一个不喜欢主动的人；虽然灵魂有趣，但不爱表达；死倔，也慢热，遇到懂我的人是幸运，遇不到也是正常了；
              沉默，喜欢独处，三观正；比你想象的深情，也比你以为的冷漠。
            </p>
            <p className="author">—— 一休</p>
          </div>

          <div className="block">
            <p className="favorite-quotes">
              一个心里成熟的人，绝不会随意批判他人。因为你不是别人，不知道他经历了什么，面临着什么。
            </p>
            <p className="author">—— 《了不起的盖茨比》</p>
          </div>

          <div className="block">
            <p className="favorite-quotes">
              你永远不可能真正了解一个人，除非你穿上他的鞋子走来走去，站在他的角度思考问题。
            </p>
            <p className="author">—— 《杀死知更鸟》</p>
          </div>

          <div className="block">
            <p className="favorite-quotes">
              你对我的百般注解和识读，并不构成万分之一的我，却是一览无遗的你。
            </p>
            <p className="author">—— 三毛</p>
          </div>
        </div>
      </div>

      {/* 反面 */}
      <div className="opposite"></div>
    </div>
  );
}
