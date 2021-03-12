import toProfile from '../toProfile';

describe('link to profile', function () {
  it('should link to profile page of given WebID', () => {
    const webId = 'https://webid.example/#me';
    const result = toProfile(webId);
    expect(result).toEqual('/profile?webId=https%3A%2F%2Fwebid.example%2F%23me')
  });

});