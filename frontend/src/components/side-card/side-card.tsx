import { FC } from 'react';
import { Link } from 'react-router-dom';
import './side-card.css';

export interface SideCardProps {
  sideCard: boolean;
  onClickMenu: () => void;
}

export const SideCard: FC<SideCardProps> = (props) => {
  return(
    <nav className={!props.sideCard ? "sidebar" : "sidebar sidebar--expanded"}>
      <i className="fa fa-window-close" aria-hidden="true" onClick={props.onClickMenu}/>
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
};

