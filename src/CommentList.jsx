import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  static defaultProps = {
    comments: []
  }

  constructor() {
    super();
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleDeleteComment(index) {
    this.props.onDeleteComment && this.props.onDeleteComment(index);
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, i) => {
          return (
            <Comment
              comment={comment}
              key={i}
              index={i}
              onDeleteComment={this.handleDeleteComment}
            />
          );
        })}
      </div>
    );
  }
}

export default CommentList;