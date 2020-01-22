const showProjects = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PROJECT':
      return state.show
    default:
      return state;
  } 
} 

export default showProjects;