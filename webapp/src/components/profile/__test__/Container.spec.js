import React from 'react';
import {shallow} from 'enzyme';

import ProfileContainer from '../Container';
import Profile from '../Profile';

const literal = value => ({
  toString: () => value
});

describe('Profile container', () => {

  it('should not render profile while pending', () => {
    const result = shallow(<ProfileContainer pending/>);
    expect(result.find(Profile)).not.toExist()
  });

  it('should render the loaded profile', () => {
    const result = shallow(<ProfileContainer
        webId="https://webid.example/#me"
        fullName={literal("John Doe")}
        imageSrc={literal("https://image.example/me.png")}
    />);
    expect(result).toContainReact(<Profile
        webId="https://webid.example/#me"
        fullName="John Doe"
        imageSrc="https://image.example/me.png"
    />);
  });

  it('should render the loaded profile without data', () => {
    const result = shallow(<ProfileContainer
        webId="https://webid.example/#me"
    />);
    expect(result).toContainReact(<Profile
        webId="https://webid.example/#me"
        fullName={undefined}
        imageSrc={undefined}
    />);
  });

  it('should not update when pending', () => {
    const result = shallow(<ProfileContainer
        webId="https://webid.example/#me"
        fullName={literal("John Doe")}
        imageSrc={literal("https://image.example/me.png")}
    />);
    result.setProps({
      pending: true,
      fullName:  undefined,
      imageSrc: undefined
    });
    expect(result).toContainReact(<Profile
        webId="https://webid.example/#me"
        fullName="John Doe"
        imageSrc="https://image.example/me.png"
    />);
  });

  it('should update when not pending anymore', () => {
    const result = shallow(<ProfileContainer pending />);
    result.setProps({
      pending: false,
      webId: "https://webid.example/#me",
      fullName:  literal("John Doe"),
      imageSrc: literal("https://image.example/me.png")
    });
    expect(result).toContainReact(<Profile
        webId="https://webid.example/#me"
        fullName="John Doe"
        imageSrc="https://image.example/me.png"
    />);
  });
});
