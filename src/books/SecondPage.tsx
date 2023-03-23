import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SecondPage.css';
import type { Props } from '../types';

export default function SecondPage(props: Props) {
  return (
    <div className="page second-page" onTransitionEnd={props.onTransitionEnd}>
      {/* 正面 */}
      <div className="front">
        <div className="worked">
          <h2>Worked in</h2>
          <div className="block">
            <div className="company">
              <h3>袖虎宠物有限责任公司</h3>
              <span className="time">23.2.13 - 23.3.2</span>
            </div>

            <div className="take">
              <div className="row hold">
                take:
                <p className="line">
                  <span>前端开发</span>
                </p>
              </div>
              <div className="row salary">
                salary:
                <p className="line">
                  <span>10k</span>
                </p>
              </div>
              <div className="row duty">
                duty:
                <p className="line">
                  <span>已有项目开发、日报、需求讨论</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="next" onClick={props.toggleTurn}>
          <FontAwesomeIcon icon={['fas', 'angle-right']} />
        </button>
      </div>
      {/* 反面 */}
      <div className="opposite">
        <div className="term">
          <h2>Term</h2>
          <div className="block engineering">
            <div className="company">
              <h3>绒语宠物商城</h3>
              <span className="time">23.2.13 - 23.3.2</span>
            </div>

            <p className="project-description">
              该项目是基于 uniapp 框架，搭配 uView
              组件库开发的多端商城应用程序，包含洗护、订阅、订单与购物车等模块；
              商城主营宠物相关产品，如宠物零食、宠物玩具及线下洗护等。
            </p>

            <p className="project-description">
              主要进行项目二次开发，处理小程序与 H5
              兼容性问题，并就用户体验进行优化，如：网络延迟、智能提示、页面风格等。
            </p>

            <p className="project-description">
              项目难点：二次开发，项目需求由 H5 & APP 两端变为 H5 & APP &
              小程序三端，代码兼容性极差，需要大幅改造。
            </p>
          </div>
        </div>

        <button className="prev" onClick={props.toggleTurn}>
          <FontAwesomeIcon icon={['fas', 'angle-left']} />
        </button>
      </div>
    </div>
  );
}
