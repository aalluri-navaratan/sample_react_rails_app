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

            </div>
            )
         }
});

var CommentRow =
    React.createClass({
      handleAdd:function(e){
       // alert(this.props.data.id);
        window.location.href = 'http://localhost:3000/comments/new';
      },
      handleShow:function(e){
     
        alert(this.props.data.id)
        // $.ajax({
        //   type: 'GET',
        //   url: 'http://localhost:3000/comments/show/'+this.props.comment.id
        //   data: {},
        //   //dataType: html,
        //     success: function(){
        //       alert('success')
       
        //     }
        // });
       window.location.href = 'http://localhost:3000/comments/edit/'+this.props.data.id;
      },
           
      handleEdit:function(id){
        // alert(id);
        console.log(this.props.data.id)
        console.log(id)
        window.location.href = 'http://localhost:3000/comments/edit/'+this.props.data.id;
      } ,
      
      handleDestroy:function(e){
        alert(this.props.data.id);
        window.location.href = 'http://localhost:3000/comments/delete/'+this.props.data.id;
      },
      
      render:function(){
       // console.log(this.props)
        return (
                    <tr key={0}>
                        
                        <td>{this.props.data.id}</td>
                        <td>{this.props.data.author}</td>
                        <td>{this.props.data.text}</td>
                    
                    <td><button onClick={this.handleAdd}>Add</button></td>
                    <td><button onClick={this.handleShow}>Show</button></td>
                    <td><button onClick={this.handleEdit} >Edit</button></td>
                    <td><button onClick={this.handleDestroy} >Delete</button></td>
                  </tr>
                    
            )
        }
    });

