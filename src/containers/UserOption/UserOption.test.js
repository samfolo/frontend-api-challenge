import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, setup } from '../../util/testUtils';
import UserOption from './UserOption';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<UserOption />', () => {
  let wrapper;
  let userOptionComponent;

  beforeEach(() => {
    wrapper = setup(UserOption);
    userOptionComponent = findByTestAttr(wrapper, 'component-user-option');
  });

  it('renders without crashing', () => {
    expect(userOptionComponent).toHaveLength(1);
  });

  it('can reveal a sign in form', () => {
    wrapper = setup(UserOption, { option: 'Sign In', }, { active: false });

    const signInButton = findByTestAttr(wrapper, 'sign-in-button');
    signInButton.simulate('click');
    expect(wrapper.text()).toContain('<AuthForm />');
  });

  it('can reveal a sign up form', () => {
    wrapper = setup(UserOption, { option: 'Sign Up', }, { active: false });

    const signUpButton = findByTestAttr(wrapper, 'sign-up-button');
    signUpButton.simulate('click');
    expect(wrapper.text()).toContain('<AuthForm />');
  });
});