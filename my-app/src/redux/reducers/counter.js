// Initial state
const initialState = {
  count: 0
};

// Actions
export const INCREMENT = 'my-app/INCREMENT'
export const DECREMENT = 'my-app/DECREMENT'

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
export default reducer

// Action Creators
export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
