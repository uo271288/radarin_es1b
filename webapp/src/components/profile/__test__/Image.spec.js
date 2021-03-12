import React from 'react';
import {shallow} from 'enzyme';

import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

import Image from '../Image';

describe('Image', () => {

  describe('with src URI', function () {
    let result;
    beforeEach(() => {
      result = shallow(<Image name="John Doe" src="http://image.example/me.png" className="custom"/>);
    });

    it('should render a avatar', () => {
      let avatar = result.find(Avatar);
      expect(avatar).toExist();
      expect(avatar).toHaveProp('alt', 'John Doe');
      expect(avatar).toHaveProp('src', 'http://image.example/me.png');
    });

    it('overrides className with passed value', () => {
      let avatar = result.find(Avatar);
      expect(avatar).toHaveProp('className', 'custom');
    });
  });

  describe('without src URI', function () {
    let result;
    beforeEach(() => {
      result = shallow(<Image name="John Doe" className="custom"/>);
    });

    it('should render a default face icon', () => {
      let avatar = result.find(Avatar);
      expect(avatar).toExist();
      expect(avatar).toHaveProp('alt', 'John Doe');
      expect(avatar).not.toHaveProp('src');
      expect(avatar).toContainReact(<FaceIcon/>);
    });

    it('overrides className with passed value', () => {
      let avatar = result.find(Avatar);
      expect(avatar).toHaveProp('className', 'custom');
    });
  });
});

