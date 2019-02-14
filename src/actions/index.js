import axios from 'axios';

export const FETCHING = 'FETCHING';
export const GET_TODOS = 'GET_TODOS';
export const GET_TODO = 'GET_TODO';
export const ERROR = 'ERROR';
export const UPDATE_TODO = 'UPDATE_TODO'

//OLD GET NOTES
// export const fetchingToDos = () => {
// 	return (dispatch) => {
// 		dispatch({ type: FETCHING })
// 		axios.get('https://fe-notes.herokuapp.com/note/get/all')
// 			.then( response => {
// 				dispatch({
// 					type: GET_TODOS,
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

//NEW GET NOTES
export const fetchingToDos = () => {
	return (dispatch) => {
		dispatch({ type: FETCHING })
		axios.get(`http://localhost:6333/api/notes`)
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

//OLD GET NOTES BY ID
// export const getToDo = (id) => {
// 	return(dispatch) => {
// 		dispatch({ type: FETCHING });
// 		axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
// 			.then ( response => {
// 				dispatch ({
// 					type: GET_TODO,
// 					currentNote: response.data,
// 				})
// 			})

// 			.catch ( error => {
// 				dispatch({
// 					type: ERROR,
// 					errorMessage: 'Trouble finding To DO ...'
// 				})
// 			})
// 	}
// }

//NEW GET NOTES BY ID
export const getToDo = (id) => {
	return(dispatch) => {
		dispatch({ type: FETCHING });
		axios.get(`http://localhost.6333/api/notes/${id}`)
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

//OLD ADD NOTE
// export const addingToDo = (newToDo) => {
// 	return (dispatch) => {
// 		dispatch({ type: FETCHING });
// 		axios.post('https://fe-notes.herokuapp.com/note/create', newToDo)
// 			.then( response => {
// 				dispatch({
// 					type: GET_TODOS,
// 					notes: response.data,
// 				})
// 			})
			
// 			.catch( error => {
// 				dispatch({
// 					type: ERROR,
// 					errorMessage: 'Trouble adding To Do.  Please try again later.',
// 				})
// 			})
// 	}
// }

//NEW ADD NOTE
export const addingToDo = (newToDo) => {
	return (dispatch) => {
		dispatch({ type: FETCHING });
		axios.post('http://localhost.6333/api/notes', newToDo)
			.then( response => {
				dispatch({
					type: GET_TODOS,
					notes: response.data,
				})
			})
			
			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble adding To Do.  Please try again later.',
				})
			})
	}
}

//OLD DELETE NOTE
// export const deleteToDo = (id) => {
// 	return (dispatch) => {
// 		dispatch({ type: FETCHING });
// 		axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
// 			.then( dispatch(getToDo))

  
// 			.catch( error => {
// 				dispatch({
// 					type: ERROR,
// 					errorMessage: 'Trouble deleting To Do',
// 				})
// 			})
// 	}
// }

//NEW DELETE NOTE
export const deleteToDo = (id) => {
	return (dispatch) => {
		dispatch({ type: FETCHING });
		axios.delete(`http://localhost.6333/api/notes/${id}`)
			.then( dispatch(getToDo))

  
			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: 'Trouble deleting To Do',
				})
			})
	}
}

//OLD UPDATE NOTE
// export const updateToDo = (id, updatedToDo) => {
// 	return (dispatch) => {
// 		dispatch({ type: FETCHING })
// 		axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updatedToDo)
// 			.then( response => {
// 				dispatch({
// 					type: GET_TODO,
// 					currentNote: response.data,
// 				})
// 			})

// 			.catch( error => {
// 				dispatch({
// 					type: ERROR,
// 					errorMessage: "Trouble updating To Do",
// 				})
// 			})
// 	}
// }

//NEW UPDATE NOTE
export const updateToDo = (id, updatedToDo) => {
	return (dispatch) => {
		dispatch({ type: FETCHING })
		axios.put(`http://localhost.6333/api/notes/${id}`, updatedToDo)
			.then( response => {
				dispatch({
					type: GET_TODO,
					currentNote: response.data,
				})
			})

			.catch( error => {
				dispatch({
					type: ERROR,
					errorMessage: "Trouble updating To Do",
				})
			})
	}
}