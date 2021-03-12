import React from 'react';
import {shallow} from 'enzyme';

import {Link} from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import Tooltip from '@material-ui/core/Tooltip';

import LoginBadge from '../LoginBadge';
import Image from '../../profile/Image';

describe('User is logged in', () => {
  describe('component', () => {

    describe('without image and webid', function () {
      let result;
      beforeEach(() => {
        result = shallow(<LoginBadge fullName="John Doe"/>);
      });

      it('shows that the user is logged in', () => {
        const chip = result.find(Chip);
        expect(chip).toExist();
        expect(chip).toHaveProp('label', 'Logged in as John Doe');
        expect(chip).toHaveProp('avatar', <Image name="John Doe"
                                                 src={undefined}/>);
      });

      it('should render dummy tooltip', () => {
        const tooltip = result.find(Tooltip);
        expect(tooltip).toExist();
        expect(tooltip).toHaveProp('title', '...')
      });

    });

    describe('with image', function () {
      let result;
      beforeEach(() => {
        result = shallow(<LoginBadge fullName="John Doe"
                                   imageSrc="https://image.example/me.png"/>);
      });

      it('shows that the user is logged in', () => {
        const chip = result.find(Chip);
        expect(chip).toExist();
        expect(chip).toHaveProp('label', 'Logged in as John Doe');
        expect(chip).toHaveProp('avatar', <Image name="John Doe"
                                                 src="https://image.example/me.png"/>);
      });
    });

    describe('with webId', function () {
      let result;
      beforeEach(() => {
        result = shallow(<LoginBadge webId="https://webid.example/#me" />);
      });

      it('should link to profile page', () => {
        const chip = result.find(Chip);
        expect(chip).toExist();
        expect(chip).toHaveProp('component', Link);
        expect(chip).toHaveProp('to', '/profile?webId=https%3A%2F%2Fwebid.example%2F%23me');
      });

      it('should have webId as tooltip', () => {
        const tooltip = result.find(Tooltip);
        expect(tooltip).toExist();
        expect(tooltip).toHaveProp('title', 'https://webid.example/#me')
      });

      it('shows that the user is logged in', () => {
        const chip = result.find(Chip);
        expect(chip).toExist();
        expect(chip).toHaveProp('label', 'Logged in');
        expect(chip).toHaveProp('avatar', <Image name="https://webid.example/#me"
                                                 src={undefined}/>);
      });

    });
  });
});
