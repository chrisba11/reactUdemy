import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

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
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={user1.fullName()}
          avatar={user1.avatar} 
          timeStamp="Today at 6pm" 
          content={faker.lorem.sentences()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={user2.fullName()} 
          avatar={user2.avatar} 
          timeStamp="Today at 6pm" 
          content={faker.lorem.sentences()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={user1.fullName()} 
          avatar={user1.avatar} 
          timeStamp="Today at 6pm" 
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={user3.fullName()} 
          avatar={user3.avatar} 
          timeStamp="Today at 6pm" 
          content={faker.lorem.sentences()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={user4.fullName()} 
          avatar={user4.avatar} 
          timeStamp="Today at 6pm" 
          content={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
