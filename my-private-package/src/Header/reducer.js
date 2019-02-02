// Initial state
const initialState = {
  isLoggedIn: false,
  username: null
};

// Actions
export const LOGIN = 'my-private-package/LOGIN'
export const LOGOUT = 'my-private-package/LOGOUT'

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        username: 'j.doe'
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: null
      }
    default:
      return state
  }
}
export default reducer

// Action Creators
export const login = () => ({
  type: LOGIN
})

export const logout = () => ({
  type: LOGOUT
})