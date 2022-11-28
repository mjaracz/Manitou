import { FC, MouseEvent } from 'react';
import './menu-sandwich.css';

export interface MenuSandwichProps {
  isClicked: boolean;
  onClickMenu: (e: MouseEvent<HTMLDivElement>) => void;
}

export const MenuSandwich: FC<MenuSandwichProps> = ({ isClicked, onClickMenu }) => {
  const className = isClicked ? `appbar__sandwich appbar__sandwich--extended` : `appbar__sandwich`;

  return (
    <div className={className} onClick={onClickMenu}>
      <div className="sandwich__item sandwich__item0"/>
      <div className="sandwich__item sandwich__item1"/>
      <div className="sandwich__item sandwich__item2 "/>
    </div>
  )
};
