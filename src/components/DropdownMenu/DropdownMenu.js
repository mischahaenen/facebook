import React, { useState } from 'react';
import './DropdownMenu.css';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = (element) => {
    const height = element.offsetHeight;
    setMenuHeight(height);
  };

  const DropDownItem = (props) => (
    <button className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
      {props.leftIcon && <span className="icon-button">{props.leftIcon}</span>}
      {props.children}
      {props.rightIcon && <span className="icon-button icon-right">{props.rightIcon}</span>}
    </button>
  );
  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames="menu-primary"
      >
        <div className="menu">
          <DropDownItem>
            <strong>My Profile</strong>
          </DropDownItem>
          <DropDownItem leftIcon="🔥" rightIcon={<ChevronIcon />} goToMenu="skills">
            Skills
          </DropDownItem>
          <DropDownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />} goToMenu="settings">
            Settings
          </DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropDownItem leftIcon={<ArrowIcon />} goToMenu="main"></DropDownItem>
          <DropDownItem>
            <strong>Settings</strong>
          </DropDownItem>
          <DropDownItem>Height {menuHeight}</DropDownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'skills'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames="menu-secondary"
      >
        <div className="menu">
          <DropDownItem leftIcon={<ArrowIcon />} goToMenu="main"></DropDownItem>
          <DropDownItem>
            <strong>Skills</strong>
          </DropDownItem>
          <DropDownItem>Pro: Typescript</DropDownItem>
          <DropDownItem>Pro: Egmascript</DropDownItem>
          <DropDownItem>Pro: RxJs</DropDownItem>
          <DropDownItem>Pro: Angular</DropDownItem>
          <DropDownItem>New: React</DropDownItem>
          <DropDownItem>New: Vue.js</DropDownItem>
          <DropDownItem>Beginner: Sketch</DropDownItem>
          <DropDownItem>Beginner: Node.js</DropDownItem>
          <DropDownItem>Beginner Flutter</DropDownItem>
          <DropDownItem>Beginner: Photoshop, Indesign</DropDownItem>
          <DropDownItem>
            <a href="https://fireship.io/">appreciate fireship.io</a>
          </DropDownItem>
          <DropDownItem>Height {menuHeight}</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
