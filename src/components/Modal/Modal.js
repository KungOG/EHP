import React from 'react';
/* import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../actions'; */
import ProjectCard from '../ProjectCard/ProjectCard';
import Profile from '../Profile/Profile';

const Modal = () => {
  /* const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  {counter}
  <button onClick={ () => dispatch(increment()) }>+</button>
  <button  onClick={ () => dispatch(decrement()) }>-</button> */

  return (
    <div className="modal">
      <div className="modal__top">
       <Profile />
      </div>
      <div className="modal__bottom">
        <ProjectCard />
      </div>
    </div>
  );
}

export default Modal;
