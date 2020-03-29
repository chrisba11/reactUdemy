import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';

const user1 = { first: faker.name.firstName(), last: faker.name.lastName(), avatar: faker.image.avatar() }
const user2 = { first: faker.name.firstName(), last: faker.name.lastName(), avatar: faker.image.avatar() }
const user3 = { first: faker.name.firstName(), last: faker.name.lastName(), avatar: faker.image.avatar() }
const user4 = { first: faker.name.firstName(), last: faker.name.lastName(), avatar: faker.image.avatar() }

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author={user1.first} avatar={user1.avatar} />
      <CommentDetail author={user2.first} avatar={user2.avatar} />
      <CommentDetail author={user1.first} avatar={user1.avatar} />
      <CommentDetail author={user3.first} avatar={user3.avatar} />
      <CommentDetail author={user1.first} avatar={user1.avatar} />
      <CommentDetail author={user4.first} avatar={user4.avatar} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
