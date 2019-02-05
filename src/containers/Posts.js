import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'store/posts/actions';
import { UL, LI, H2, P } from 'styles';
import Loading from 'components/Loading';
import PropTypes from 'prop-types';

class Posts extends Component {
  getFetchedPosts = () => {
    const { dispatch, getPosts } = this.props;
    dispatch(fetchPosts(getPosts));
  }

  componentDidMount() {
    this.getFetchedPosts();
  }

  renderPostsList = (posts) => {
    return (
      <UL className="posts-list">
        {posts.map(i =>
          <LI className="post-item" key={i.id}>
            <H2>{i.title}</H2>
            <P>{i.body}</P>
          </LI>
        )}
      </UL>
    )
  }

  render() {
    const { posts, isLoading } = this.props;

    return (
      (isLoading) ? 
      <Loading text="Loading Posts..." /> :
      <Fragment>
        {this.renderPostsList(posts)}
      </Fragment>
    );
  }
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  isLoading: state.isLoading,
});

export default connect(mapStateToProps)(Posts);