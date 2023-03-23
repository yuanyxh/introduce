import React, { MouseEvent, useState } from 'react';
import './Book.css';
import Cover from './Cover';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import BackCover from './BackCover';
import { partial, className, Element } from '../utils';
import type { TransitionEvent } from 'react';

const { toggleClass } = className,
  { getElement } = Element;

let direction: 'LEFT' | 'RIGHT' = 'LEFT',
  zIndex = 0;
const query = partial(getElement, undefined as unknown as null, 'page');
export default function Book() {
  const [book, setBook] = useState('book');

  const toggleBook = () => {
    direction = !book.split(/\s+/).includes('conduct') ? 'LEFT' : 'RIGHT';
    setBook(toggleClass(book, 'conduct'));
  };
  const toggleTurn = function (e: MouseEvent<HTMLElement>) {
    const current = query(e.currentTarget);
    const names = current && current.className;
    if (!names) return;

    direction = !names.split(/\s+/).includes('turn') ? 'LEFT' : 'RIGHT';
    current.className = toggleClass(names, 'turn');
  };

  const onTransitionEnd = (e: TransitionEvent<HTMLDivElement>) => {
    if (direction === 'LEFT') {
      const current = query(e.currentTarget);
      current && (current.style.zIndex = `${zIndex++}`);
    } else if (direction === 'RIGHT') {
      zIndex--;
      const current = query(e.currentTarget);
      current && (current.style.zIndex = '');
    }
  };

  return (
    <div className={book}>
      {/* 封面 */}
      <Cover start={toggleBook} onTransitionEnd={onTransitionEnd} />
      {/* 第一页 */}
      <FirstPage onTransitionEnd={onTransitionEnd} toggleTurn={toggleTurn} />
      <SecondPage onTransitionEnd={onTransitionEnd} toggleTurn={toggleTurn} />
      {/* 封底 */}
      <BackCover />
    </div>
  );
}
