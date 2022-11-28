import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { MenuSandwich } from '../menu-sandwich';

import './app-bar.css';

export interface NavProps {
  onClickSandwich: (e: MouseEvent<HTMLDivElement>) => void;
  isClickedSandwich: boolean;
}

export const Nav: FC<NavProps> = (props) => {
    const {
      isClickedSandwich,
      onClickSandwich
    } = props;
    return (
      <nav className="header__appbar">
        <MediaQuery query="(max-width: 1224px)">
          <MenuSandwich
            onClickMenu={onClickSandwich}
            isClicked={isClickedSandwich}
          />
        </MediaQuery>
        <li>
          <Link to="/about" className="appbar__item">About</Link>
        </li>
        <li>
          <Link to="/" className="appbar__item">Home</Link>
        </li>
        <li>
          <Link to="/copyrights" className="appbar__item">Author Copyrights</Link>
        </li>
        <li>
          <Link to="/concat" className="appbar__item">Concat</Link>
        </li>
        <li>
          <Link to="/sign-in" className="appbar__item">Sign In</Link>
        </li>
      </nav>
    )

}

