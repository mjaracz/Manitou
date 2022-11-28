import { useRef } from 'react';
import { DownArrow } from '../../assets/down-arrow';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = () => {
  const ref = useRef(null);
  const onClickArrow = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return(
    <div className="mainPage">
      <div onClick={onClickArrow} className="mainPage--description">
        <p className="mainPage__text">
          Go through a hut covered with deer leather
          Enter the world of Indian stories
        </p>
        <p className="mainPage__text">
          Together with a million users write your part of the story
        </p>
        <DownArrow onClick={onClickArrow} className="mainPage__SVG" alt="down-arrow"/>
      </div>
      <div ref={ref} className="mainPage--flex">
          <div className="mainPage__img mainPage__img1">
            <Link to="/apaches">
              <h1 className="mainPage__img--text">Apaches</h1>
            </Link>
          </div>
          <div className="mainPage__img mainPage__img2">
            <Link to="/comanche">
              <h1 className="mainPage__img--text mainPage__img--text1">Comanche</h1>
            </Link>
          </div>
          <div className="mainPage__img mainPage__img3">
            <Link to="/cheyenne">
              <h1 className="mainPage__img--text">Cheyenne</h1>
            </Link>
          </div>
      </div>
    </div>
  )
};

