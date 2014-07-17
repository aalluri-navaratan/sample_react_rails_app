/** @jsx React.DOM */

var CommentEdit = React.createClass({
 
 
  handleCommentSubmit: function (event) {
    var id = this.state.comments
    this.state.comments.author = this.refs.author.getDOMNode().value.trim()
    this.state.comments.text = this.refs.text.getDOMNode().value.trim()
    alert(this.state.comments.author);
    alert(this.state.comments.text);
    $.ajax({
      type: 'PUT',
      url: '/comments/'+this.state.comments.id,
      data: {comment:{ author: this.state.comments.author, text: this.state.comments.text }},
        success: function(){
          alert('success');
        }
    });
  },
  getInitialState: function () {
     return JSON.parse(this.props.presenter);
  },
  render:function(){
          return(
            <div>
              <h4>Edit-form</h4>
               <form ref="form" className="comment-form" action={ this.state.form.action } accept-charset="UTF-8" method="PUT" onSubmit={ this.handleCommentSubmit }>
                      <p><input ref="author" name="comment[author]" defaultValue ={this.state.comments.author} placeholder="Author Name" /></p>                     
                      <p><input ref ="text" name="comment[text]" defaultValue ={this.state.comments.text} placeholder="Some Comment ..." /></p>
                      <p><button type="submit">Edit Comment</button></p>
                </form>
            </div>
          )
    }
});
