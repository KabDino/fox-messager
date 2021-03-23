import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('Profile status component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status="profile test status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('profile test status');
  });
  test('after creation <span> with should be displayed with correct status', () => {
    const component = create(<ProfileStatus status="profile test status" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span).not.toBeNull();
  });
  test("after creation <input> with shouldn't be displayed with correct status", () => {
    const component = create(<ProfileStatus status="profile test status" />);
    const root = component.root;
    expect(() => {
      root.findByType('input')
    }).toThrow();
  });
  test('after creation <span> contains correct status', () => {
    const component = create(<ProfileStatus status="profile test status" />);
    const root = component.root;
    let span = root.findByType('span');
    expect(span.children[0]).toBe('profile test status');
  });
  test('input should be displayed in editMode instead of <span>', () => {
    const component = create(<ProfileStatus status="profile test status" />);
    const root = component.root;
    let span = root.findByType('span');
    span.props.onDoubleClick()
    let input = root.findByType('input');
    expect(input.props.value).toBe('profile test status')
  })
  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="profile test status" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1)
  })
});
