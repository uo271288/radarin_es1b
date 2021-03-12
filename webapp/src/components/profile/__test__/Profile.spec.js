import React from 'react';
import {shallow} from 'enzyme';

import Profile from '../Profile';
import Image from '../Image';
import Typography from "@material-ui/core/Typography";
import FriendList from '../../friendList';

describe('Profile', () => {

  let result;
  beforeEach(() => {
    result = shallow(<Profile
        webId="https://webid.example/#me"
        fullName="John Doe"
        imageSrc="https://img.example/me.png"
    />);
  });

  it('should render the name a profile title', () => {
    expect(result).toContainReact(<Typography variant="h5" component="h3">John Doe</Typography>)
  });

  it('should render the webId as caption', () => {
    expect(result).toContainReact(<Typography variant="caption">https://webid.example/#me</Typography>)
  });

  it('should render the profile image', () => {
    expect(result).toContainReact(<Image name="John Doe" src="https://img.example/me.png"/>)
  });

  it('should render the friend list', () => {
    expect(result).toContainReact(<FriendList webId="https://webid.example/#me"/>)
  });

});
