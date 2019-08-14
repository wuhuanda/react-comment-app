import React from 'react';

class CommentInput extends React.Component {
  constructor() {
    super();
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
  }
  state = {
    username: '',
    content: '',
  }

  componentDidMount() {
    this.textarea.focus();
    this._loadUsername();
  }

  // 改变用户名
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  // 改变留言框
  handleContentChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  // 发布
  handleSubmit() {
    if (this.props.onSubmit) {
      const { username, content } = this.state;
      this.props.onSubmit({
        username,
        content,
        createdTime: Number(new Date())
      });
    }
    this.setState({ content: '' });
  }

  _saveUsername(username) {
    localStorage.setItem('username', username);
  }

  _loadUsername() {
    const username = localStorage.getItem('username');
    username && this.setState({
      username
    });
  }

  // 用户名输入框失焦
  handleUsernameBlur(e) {
    this._saveUsername(e.target.value);
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onBlur={this.handleUsernameBlur}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              ref={textarea => { this.textarea = textarea }}
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    );
  }
}

export default CommentInput;