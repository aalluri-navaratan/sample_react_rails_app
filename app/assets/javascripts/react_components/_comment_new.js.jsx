/** @jsx React.DOM */

var CommentNew = React.createClass({

  getInitialState: function () {
    alert(this.props.presenter);
     return  JSON.parse(this.props.presenter);
  },

  handleSubmit: function ( event ) {
    //event.preventDefault();

    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();

    // validate
    if (!text || !author) {
      return false;
    }
  },
  render: function () {
    return (
      <form ref="form" className="comment-form" action={ this.state.form.action } accept-charset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.state.form.csrf_param } value={ this.state.form.csrf_token } /></p>
        <p><input ref="author" name="comment[author]" placeholder="Your name" /></p>
        <p><input ref="text" name="comment[text]" placeholder="Say something..." /></p>
        <p><button type="submit">Add Comment</button></p>
      </form>
    )
  }
});



