import React from 'react';
import {shallow} from 'enzyme';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom';

import Friend from '../Friend';
import Image from "../../../profile/Image";

describe('Friend in friend list', function () {
  it('shows name and webId', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   webId="https://webid.example/#me"/>);
    const text = result.find(ListItemText);
    expect(text).toHaveProp('primary', 'John Doe');
    expect(text).toHaveProp('secondary', 'https://webid.example/#me');
  });

  it('links to profile', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   webId="https://webid.example/#me"/>);
    expect(result).toHaveProp('component', Link);
    expect(result).toHaveProp('to', '/profile?webId=https%3A%2F%2Fwebid.example%2F%23me');
  });

  it('renders the profile image of the friend', () => {
    const result = shallow(<Friend fullName="John Doe"
                                   imageSrc="https://image.example/me.png"
                                   webId="https://webid.example/#me"/>);
    const image = result.find(Image);
    expect(image).toHaveProp('src', 'https://image.example/me.png');
    expect(image).toHaveProp('fullName', 'John Doe');
  });

});