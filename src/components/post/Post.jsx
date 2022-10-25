import React from 'react'
import { useDispatch } from 'react-redux';
import { setPostToggle } from '../profile/profileSlice';
import './post.css';

const Post = () => {
  const dispatch =  useDispatch()
  return (
    <>
      <div className="hide_div" onClick={() => dispatch(setPostToggle())}></div>
      <div className="post_root_div">Test</div>
    </>
  );
}

export default Post