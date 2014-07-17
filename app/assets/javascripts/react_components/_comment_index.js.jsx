/** @jsx React.DOM */

var CommentIndex = React.createClass({
  getInitialState: function () {
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
                    <th>Actions</th>

                  </tr>
                  <tbody>
                        {this.state.comments.map(function(comment,i){
             
                        return <CommentRow key={i} data={comment} /> 
                                  
                        })}
                  </tbody>    
                </table>
                <td><a href={'/comments/new/'}>Add</a></td>
            </div>
            )
         }
});

var CommentRow =
    React.createClass({
          
      render:function(){
        return (
                    <tr key={0}>
                        
                        <td>{this.props.data.id}</td>
                        <td>{this.props.data.author}</td>
                        <td>{this.props.data.text}</td>
                        <td><a href={'/comments/show/'+this.props.data.id}>Show</a></td>&nbsp;
                        <td><a href={'/comments/edit/'+this.props.data.id}>Edit</a></td>&nbsp;
                        <td><a href={'/comments/delete/'+this.props.data.id}>Delete</a></td>
                        
                        
                  </tr>
                    
            )
        }
    });

