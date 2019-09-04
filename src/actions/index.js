import axios from 'axios';

export const FETCHING = 'FETCHING';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODO = 'GET_TODO';
export const ERROR = 'ERROR';
export const UPDATE_TODO = 'UPDATE_TODO'

export const fetchingToDos = () => {
	return (dispatch) => {
		dispatch({ type: FETCHING })
		axios.get(`http://localhost:6334/api/notes`)
			.then( response => {
				dispatch({
					type: GET_TODOS,
					notes: response.data,
				})
			})

			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble finding To Dos ...',
				})
			})
	}
}


// EDIT

// export const fetchingToDos = () => {
// 	return (dispatch) => {
// 		dispatch({ type: Object.assign( {}, this.state, {fetching: true }) })
// 		axios.get(`http://localhost:6334/api/notes`)
// 			.then( response => {
// 				dispatch({
// 					type: Object.assign( {}, this.state, { notes: this.state.notes, fetching: false, error: '' }),
// 					notes: response.data,
// 				})
// 			})

// 			.catch( error => {
// 				dispatch({
// 					type: ERROR,
// 					errorMessage: 'Trouble finding To Dos ...',
// 				})
// 			})
// 	}
// }

// EDIT
export const getToDo = (id) => {
	return(dispatch) => {
		dispatch({ type: FETCHING });
		axios.get(`http://localhost:6334/api/notes/${id}`)
			.then ( response => {
				dispatch ({
					type: GET_TODO,
					currentNote: response.data,
				})
			})

			.catch ( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble finding To DO ...'
				})
			})
	}
}

export const addingToDo = (newToDo) => {
	return (dispatch) => {
		dispatch({ type: FETCHING });
		axios.post('http://localhost:6334/api/notes', newToDo)
			.then( dispatch(fetchingToDos) )
			
			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble adding To Do.  Please try again later.',
				})
			})
	}
}

export const deleteToDo = (id) => {
	return (dispatch) => {
		dispatch({ type: FETCHING });
		axios.delete(`http://localhost:6334/api/notes/${id}`)
			.then( dispatch(getToDo))

  
			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble deleting To Do',
				})
			})
	}
}

export const updateToDo = (id, updatedToDo) => {
	return (dispatch) => {
		dispatch({ type: FETCHING })
		axios.put(`http://localhost:6334/api/notes/${id}`, updatedToDo)
			.then( dispatch(fetchingToDos) )


			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: "Trouble updating To Do",
				})
			})
	}
}