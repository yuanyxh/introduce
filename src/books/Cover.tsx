import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cover.css';
import avatar from '../static/images/avatar.png';
import type { MouseEvent } from 'react';
import type { Props } from '../types';

interface CoverProps extends Props {
  start(e: MouseEvent): void;
}

export default function Cover(props: CoverProps) {
  return (
    <div className="page cover" onTransitionEnd={props.onTransitionEnd}>
      {/* 正面 */}
      <div className="front">
        <h1 className="title">Who am i?</h1>
        <p>yuanyxh</p>
        <button
          className="goaway"
          onClick={props.start}
          onTransitionEnd={(e) => e.stopPropagation()}
        >
          start
        </button>
      </div>

      {/* 反面 */}
      <div className="opposite">
        <div className="avatar" onTransitionEnd={(e) => e.stopPropagation()}>
          <img src={avatar} alt="头像" />
        </div>

        <div className="present">
          <div className="row nickname">
            nickname:
            <p className="line">
              <span>yuanyxh</span>
            </p>
          </div>
          <div className="row gender">
            gender:
            <p className="line">
              <span>男</span>
            </p>
          </div>
          <div className="row birthday">
            birthday:
            <p className="line">
              <span>2000.5.29</span>
            </p>
          </div>
          <div className="row hometown">
            hometown:
            <p className="line">
              <span>广东梅州</span>
            </p>
          </div>
          <div className="row degree">
            degree:
            <p className="line">
              <span>empty</span>
            </p>
          </div>
          <div className="row profession">
            profession:
            <p className="line">
              <span>web 前端</span>
            </p>
          </div>
          <div className="row homepage">
            homepage:
            <p className="line">
              <span>
                <a href="https://yuanyxh.com/" rel="noreferrer" target="_blank">
                  yuanyxh の blog
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="speech">
          <p className="talk">根本赢不了，我听不懂</p>
          <p className="author">—— 大古</p>
        </div>

        <button className="prev" onClick={props.start}>
          <FontAwesomeIcon icon={['fas', 'angle-left']} />
        </button>
      </div>
    </div>
  );
}
