import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showProjects } from '../../actions';
import ProjectCard from '../ProjectCard/ProjectCard';
import Profile from '../Profile/Profile';

const Modal = () => {
  const show = useSelector(state => state.show);
  const dispatch = useDispatch();

  const showProjects = () => {
    console.log('Aktivera');
    dispatch(showProjects())
  }

  return (
    <div className="modal">
      <div className="modal__top">
       <Profile />
      </div>
      <div className="modal__bottom">
        <button className="modal__button" onClick={ () => { showProjects() } }>Show Projects</button>
        <ProjectCard className={ show ? '-active' : '' } />
      </div>
    </div>
  );
}

export default Modal;
