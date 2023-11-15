import React, { useState } from 'react';
import './Post.css';

const Post = ({ username, text, liked, onLike }) => {
  const handleLike = () => {
    onLike(!liked);
  };

  return (
    <div className={`post ${liked ? 'liked' : ''}`}>
      <h3 className='PostUsername'>{username}</h3>
      <p className='PostText'>{text}</p>
      <button className='PostButton' onClick={handleLike}>{liked ? '❤️' : '🤍'}</button>
    </div>
  );
};

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'User1', text: 'Post 1', liked: false },
    { id: 2, username: 'User2', text: 'Post 2', liked: false },
    { id: 3, username: 'User3', text: 'Post 3', liked: false },
    { id: 4, username: 'User4', text: 'Post 4', liked: false },
    { id: 5, username: 'User5', text: 'Post 5', liked: false },
  ]);

  const handleLike = (postId, liked) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, liked };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div>
      <div>
         
      </div>
      <div>
      {posts.map(post => (
        <Post
          key={post.id}
          username={post.username}
          text={post.text}
          liked={post.liked}
          onLike={liked => handleLike(post.id, liked)}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
