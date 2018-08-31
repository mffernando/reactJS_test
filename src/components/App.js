/*imports*/
import React from 'react';
import Post from './Post';
/*default react component*/
export default class App extends React.Component {
 /*html content*/
  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <Post title="ReactJS 1" />
        <Post title="ReactJS 2" />
        <Post title="ReactJS 3" />
      </div>
      );
  }
}
