import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';

const user1 = {
  first: faker.name.firstName(),
  last: faker.name.lastName(),
  fullName: function(){
    return this.first + ' ' + this.last
  },
  avatar: faker.image.avatar()
}
const user2= {
  first: faker.name.firstName(),
  last: faker.name.lastName(),
  fullName: function(){
    return this.first + ' ' + this.last
  },
  avatar: faker.image.avatar()
}
const user3 = {
  first: faker.name.firstName(),
  last: faker.name.lastName(),
  fullName: function(){
    return this.first + ' ' + this.last
  },
  avatar: faker.image.avatar()
}
const user4 = {
  first: faker.name.firstName(),
  last: faker.name.lastName(),
  fullName: function(){
    return this.first + ' ' + this.last
  },
  avatar: faker.image.avatar()
}


const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author={user1.fullName()}
        avatar={user1.avatar} 
        timeStamp="Today at 6pm" 
        content={faker.lorem.sentences()}
      />
      <CommentDetail 
        author={user2.fullName()} 
        avatar={user2.avatar} 
        timeStamp="Today at 6pm" 
        content={faker.lorem.sentences()}
      />
      <CommentDetail 
        author={user1.fullName()} 
        avatar={user1.avatar} 
        timeStamp="Today at 6pm" 
        content={faker.lorem.sentence()}
      />
      <CommentDetail 
        author={user3.fullName()} 
        avatar={user3.avatar} 
        timeStamp="Today at 6pm" 
        content={faker.lorem.sentences()}
      />
      <CommentDetail 
        author={user4.fullName()} 
        avatar={user4.avatar} 
        timeStamp="Today at 6pm" 
        content={faker.lorem.sentence()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
