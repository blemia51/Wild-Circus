export  default  function (state  = {}, action) {
  switch (action.type) {
      case  "CREATE_SESSION":
          return { ...state, token: action.token, iduser: action.iduser};

			
	  default:
          return  state;
  }}