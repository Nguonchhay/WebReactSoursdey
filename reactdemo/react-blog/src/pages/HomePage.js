import React from 'react';
import withHomeLayout from './../components/layouts/withHomeLayout';
import PostList from './../components/posts/PostList';

const HomePage = (props) => {
  return (
    <div className="col-lg-8 col-md-10 mx-auto">
        <PostList/>
      </div>
  );
}

export default withHomeLayout(HomePage);
