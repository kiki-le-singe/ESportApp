import React from 'react';
import renderer from 'react-test-renderer';
import PlayerDetails from '../';

const player = {
  firstname: 'Foo',
  lastname: 'Bar',
  shortname: 'FooBar',
  picture: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg',
  country: {
    picture: 'https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png'
  },
  data: {
     weight: 81000,
     height: 183,
     age: 33,
     last: [
       1,
       1,
       1,
       0,
       1
     ]
   }
}

it('renders correctly with defaults', () => {
  const button = renderer
    .create(<PlayerDetails player={player} />)
    .toJSON();
  expect(button).toMatchSnapshot();
});
