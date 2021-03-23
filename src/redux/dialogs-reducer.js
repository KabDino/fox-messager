const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  messagesData: [
    {
      id: 1,
      message: 'Hi',
    },
    {
      id: 2,
      message: 'How you?',
    },
    {
      id: 3,
      message: 'Sup!',
    },
    {
      id: 4,
      message: 'Ey!',
    },
    {
      id: 5,
      message: "I'm proger!",
    },
  ],

  dialogsData: [
    {
      id: 1,
      name: 'Dima',
    },
    {
      id: 2,
      name: 'Artem',
    },
    {
      id: 3,
      name: 'Valera',
    },
    {
      id: 4,
      name: 'Andrey',
    },
    {
      id: 5,
      name: 'Inna',
    },
  ],

};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: 
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, {id: 7, message: body}],
      }
      
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;
