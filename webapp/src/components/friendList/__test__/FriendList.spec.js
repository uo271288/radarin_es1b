import React from 'react';
import {shallow} from 'enzyme';
import InfiniteScroll from "react-infinite-scroll-component";

import List from "@material-ui/core/List";
import FriendList from '../FriendList';
import Friend from "../friend";

describe('friend list', function () {
  it('shows an empty list', () => {
    const result = shallow(<FriendList/>);
    const friends = result.find(List).find(Friend);
    expect(friends).toHaveLength(0);
  });

  it('shows the one and only friend', () => {
    const result = shallow(<FriendList friends={[
      "https://webid.example/friends/1#me"
    ]}/>);
    const friends = result.find(List).find(Friend);
    expect(friends).toHaveLength(1);
    expect(friends.key()).toEqual('https://webid.example/friends/1#me');
    expect(friends).toHaveProp('webId', 'https://webid.example/friends/1#me');
  });

  it('shows the given maximum of friends initially', () => {
    const result = shallow(<FriendList
        friends={[
          "https://webid.example/friends/1#me",
          "https://webid.example/friends/2#me",
          "https://webid.example/friends/3#me",
          "https://webid.example/friends/4#me"
        ]}
        showInitially={3}
    />);
    const friends = result.find(List).find(Friend);
    expect(friends).toHaveLength(3);
    expect(friends.at(0)).toHaveProp('webId', 'https://webid.example/friends/1#me');
    expect(friends.at(0).key()).toEqual('https://webid.example/friends/1#me');
    expect(friends.at(1)).toHaveProp('webId', 'https://webid.example/friends/2#me');
    expect(friends.at(1).key()).toEqual('https://webid.example/friends/2#me');
    expect(friends.at(2)).toHaveProp('webId', 'https://webid.example/friends/3#me');
    expect(friends.at(2).key()).toEqual('https://webid.example/friends/3#me');
  });

  it('shows the maximum of 10 friends as default', () => {
    let allFriends = [
      "https://webid.example/friends/1#me",
      "https://webid.example/friends/2#me",
      "https://webid.example/friends/3#me",
      "https://webid.example/friends/4#me",
      "https://webid.example/friends/5#me",
      "https://webid.example/friends/6#me",
      "https://webid.example/friends/7#me",
      "https://webid.example/friends/8#me",
      "https://webid.example/friends/9#me",
      "https://webid.example/friends/10#me",
      "https://webid.example/friends/11#me",
    ];
    const result = shallow(<FriendList
        friends={allFriends}
    />);
    expect(allFriends).toHaveLength(11);
    const renderedFriends = result.find(Friend);
    expect(renderedFriends).toHaveLength(10);
  });

  it('fetches more friends when scrolling', () => {
    const result = shallow(<FriendList
        friends={[
          "https://webid.example/friends/1#me",
          "https://webid.example/friends/2#me",
          "https://webid.example/friends/3#me",
          "https://webid.example/friends/4#me",
          "https://webid.example/friends/5#me"
        ]}
        showInitially={2}
        fetchCount={2}
    />);

    // initially 2 friends are shown
    const renderedFriends = result.find(Friend);
    expect(renderedFriends).toHaveLength(2);
    expect(result).toHaveState('hasMore', true);
    const fetchMoreData = result.find(InfiniteScroll).prop('next');

    // then 2 more are loaded
    fetchMoreData();
    const updatedFriends = result.find(Friend);
    expect(updatedFriends).toHaveLength(4);
    expect(result).toHaveState('hasMore', true);

    // finally the last friend ist loaded
    fetchMoreData();
    const allFriends = result.find(Friend);
    expect(allFriends).toHaveLength(5);
    expect(result).toHaveState('hasMore', false);

  });

});