// import profileReducer from './profile-reducer';
// import dialogsReducer from './dialogs-reducer';
// import sidebarReducer from './sidebar-reducer';

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         {
//           id: 1,
//           message: 'Hi, how are you?',
//           likes: '77',
//         },
//         {
//           id: 2,
//           message: "It's my second post",
//           likes: '33',
//         },
//         {
//           id: 3,
//           message: 'How by elephants?',
//           likes: '35',
//         },
//       ],

//       newPostText: '',
//     },

//     dialogsPage: {
//       messagesData: [
//         {
//           id: 1,
//           message: 'Hi',
//         },
//         {
//           id: 2,
//           message: 'How you?',
//         },
//         {
//           id: 3,
//           message: 'Sup!',
//         },
//         {
//           id: 4,
//           message: 'Ey!',
//         },
//         {
//           id: 5,
//           message: "I'm proger!",
//         },
//       ],

//       dialogsData: [
//         {
//           id: 1,
//           name: 'Dima',
//         },
//         {
//           id: 2,
//           name: 'Artem',
//         },
//         {
//           id: 3,
//           name: 'Valera',
//         },
//         {
//           id: 4,
//           name: 'Andrey',
//         },
//         {
//           id: 5,
//           name: 'Inna',
//         },
//       ],

//       newMessageBody: '',
//     },

//     sidebar: {},
//   },
//   _callSubscriber() {
//     console.log('State was change');
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;

// window.state = store;
