import logo from './logo.svg';
import './App.css';

import Post from './components/post';
import Avatar from "./images/born-to-feel.jpg";
import Avatar2 from "./images/knight.jpg";
import PostPicture from "./images/a-random-picture.jpg"
import PostPicture2 from "./images/not-a-random-picture.jpg"

const posts = [
  {
    id: 0,
    avatar: Avatar,
    name: "Fernando Díaz",
    nickname: "@born_to_feel",
    date: "29 July 2021",
    postText: `
      Windows PowerShell 
      Copyright (C) Microsoft Corporation. All rights reserved.
      
      Compiled successfully!
      Compiled successfully!
      Compiled successfully!
      Compiled with warnings.

      src\index.js
      Line 1:8:  'React' is defined but never used  no-unused-vars
      Line 4:8:  'App' is defined but never used    no-unused-vars

      Search for the keywords to learn more about each warning.
      To ignore, add // eslint-disable-next-line to the line before.

      The system cannot find the path specified.
    `,
    postPicture: PostPicture,
    comments: 1,
    reposts: 0,
    likes: 0
  },
  {
    id: 1,
    avatar: Avatar2,
    name: "Landolt",
    nickname: "@deus_vult",
    date: "2 March 1103",
    postText: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
    postPicture: PostPicture2,
    comments: 736,
    reposts: 666,
    likes: 3890
  },
]

function App() {
  return (
    <div className="App">
      {posts.map(post => <Post {...post} />)}
    </div>
  );
}

export default App;
