/** @jsx React.DOM */

var CommentShow = React.createClass({
  getInitialState: function () {
     alert(this.props.presenter);
     return  JSON.parse(this.props.presenter);

  },

  render:function(){
    
           //console.log(this.props.presenter)
          return(
            <div>
                <table>
                  <tr>
                    <th>sno</th>
                    <th>name</th>
                    <th>comment</th>

                  </tr>
                  <tbody>
                      <tr>
                        <td>{this.state.comments.id}</td>
                        <td>{this.state.comments.author}</td>
                        <td>{this.state.comments.text}</td>
                      </tr>
                  </tbody>    
                </table>
            </div>
          )
  }      
});

