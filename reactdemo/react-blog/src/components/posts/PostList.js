import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { postsAsync } from './../../redux/actions/postAction';
import { translate } from './../../utils';

const PostList = (props) => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.languageReducer.lang);
  const posts = useSelector(state => state.postReducer.posts);
  const loading = useSelector(state => state.postReducer.loading);
  const error = useSelector(state => state.postReducer.error);

  useEffect(() => {
    if (posts === null) {
      postsAsync(dispatch);
    }
  }, [posts]);

  const renderPostField = (post, field) => {
    if (lang === 'en') {
      return post[field];
    } else {
      return post[lang][field];
    }
  }

  const renderPosts = () => {
    if (loading) {
      return <div>Loading...</div>
    } else {
      if (posts?.length) {
        return posts.map(post => (
          <div key={post.id}>
            <div className="post-preview">
              <a href="post.html">
                <h2 className="post-title">
                  {renderPostField(post, 'title')}
                </h2>
                <h3 className="post-subtitle">
                  {renderPostField(post, 'description')}
                </h3>
              </a>
              <p className="post-meta">Posted by
                <a href="#">{renderPostField(post, 'author')}</a>
                on {post.post_date}
              </p>
            </div>
            <hr/>
          </div>
        ))
      } else {
        return <div>No posts</div>
      }
    }
  }

  return (
    <div className="post-list">
        <h2>{translate(lang, 'post.list_title')}</h2>
        <div>{renderPosts()}</div>
        
        <div className="clearfix">
          <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
    </div>
  )
};

export default PostList;