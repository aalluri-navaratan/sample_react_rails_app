/** @jsx React.DOM */

var CommentEdit = React.createClass({
 
 
  handleCommentSubmit: function (event) {
    // var id = this.state.comments
    // var author = this.refs.author.getDOMNode().value.trim()
    // var text = this.refs.text.getDOMNode().value
    var comment = this.state.comments;
    alert(comment);
    var newComment = comment.concat([comments])
    alert(newComment);
    this.setState({comments: newComment});
    alert(this.state.comments.author);
    //alert(author);
    //alert(text);
    // $.ajax({
    //   type: 'PUT',
    //   url: this.props.url,
    //   data: {id: id, author: author, text: text, csrf_token: this.state.form.csrf_param},
    //   dataType : html,
    //     success: function(){

        //window.location.href='http://localhost:3000/comments/'+this.state.comments.id;
    //     }
    // });
  },
  getInitialState: function () {
     return JSON.parse(this.props.presenter);
  },
  render:function(){
          return(
            <div>
              <h4>Edit-form</h4>
                      <p><input ref="author" name="comment[author]" defaultValue ={this.state.comments.author} placeholder="Author Name" /></p>                     
                      <p><input ref ="text" name="comment[text]" defaultValue ={this.state.comments.text} placeholder="Some Comment ..." /></p>
                      <p><button onClick={this.handleCommentSubmit} >New comment</button></p>
            </div>
          )
    }
});
