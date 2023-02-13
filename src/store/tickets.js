const initialState = [
  {id: 123, name: 'Jo (they, them)', table: 1, topic: 'Salmon Cookies'},
  {id: 456, name: 'Jo (she, her)', table: 2, topic: 'City Explorer'},
  {id: 789, name: 'Jo (he, him)', table: 3, topic: 'Auth'}
];


const ticketsReducer = (state = initialState, action) => {

  switch(action.type){
    case 'REMOVE':
      return state.filter(ticket => ticket.id !== action.payload);
    case 'ADD':
      return [...state, action.payload];
    default:
      return state;
  }

};

// actions
export const removeTicket = (id) => {
  return {
    type: 'REMOVE',
    payload: id
  }
}

export const addTicket = (ticket) => {
  return {
    type: 'ADD',
    payload: ticket
  }
}

export default ticketsReducer;
