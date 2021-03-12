import React from 'react';
import {shallow} from 'enzyme';

import FriendListContainer from '../Container'
import FriendList from '../FriendList';
import CircularProgress from "@material-ui/core/CircularProgress";

describe('Friend list container', function () {
  it('indicates loading', () => {
    const result = shallow(<FriendListContainer pending/>);
    expect(result).toContainReact(<CircularProgress/>);
  });

  it('shows friend list after loading', () => {
    const result = shallow(<FriendListContainer
        friends={['one', 'two', 'three']}/>);
    expect(result).toContainReact(
        <FriendList
            friends={['one', 'two', 'three']}
        />);
  });

});