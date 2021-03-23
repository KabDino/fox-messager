import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';
import ReactDOM from 'react-dom';
import React from 'react';

let state = {
  posts: [
    {
      id: 1,
      message: 'Hi, how are you?',
      likes: '77',
    },
    {
      id: 2,
      message: "It's my second post",
      likes: '33',
    },
    {
      id: 3,
      message: 'How by elephants?',
      likes: '35',
    },
  ],
};

it('Length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('it-programming');

  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

it('Message of new posts should be correct', () => {
  let action = addPostActionCreator('it-programming');
  let newState = profileReducer(state, action)
  expect(newState.posts[3].message).toBe('it-programming');
});

it('After deleted length of messages should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(2);
});

it("After deleted length shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3);
});