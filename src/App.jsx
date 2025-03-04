/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllPosts from './api/Posts/postsApi';

function App() {

  const { posts, loading, error } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts("https://jsonplaceholder.typicode.com/posts"));
    console.log(posts, loading, error);
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  );
}

export default App;