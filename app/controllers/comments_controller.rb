class CommentsController < ApplicationController
 
  def index
    @presenter = {
        :comments => Comment.all,
        :form => {
          :action => comments_path,
          :csrf_param => request_forgery_protection_token,
          :csrf_token => form_authenticity_token
        }
    }
  end
  
  def show
    
    @presenter = {
        :comments => Comment.find(params[:id]),
        :form => {
          :action => comments_path,
          :csrf_param => request_forgery_protection_token,
          :csrf_token => form_authenticity_token
        }
    }
  end
  
  def edit
    
    @presenter = {
        :comments => Comment.find(params[:id]),
        :form => {
          :action => comments_path(params[:id]),
          :csrf_param => request_forgery_protection_token,
          :csrf_token => form_authenticity_token
        }
    }
    
  end


    
  def update
      @comment = Comment.find(params[:id])
      if @comment.update_attributes(comment_params)
        flash[:notice] = "Comment updated successfully."
        redirect_to(:action => 'show' , :id => @comment.id)
      else
        @subject_count = Subject.count
        render('edit')
      end
    end
        


  def new
   @presenter = {
        :comments => Comment.new,
        :form => {
          :action => comments_path,
          :csrf_param => request_forgery_protection_token,
          :csrf_token => form_authenticity_token
        }
    }
     
  end

  def create

    @comment = Comment.new(comment_params)
    @comment.save
    if request.xhr?
      render :json => Comment.last(5)
    else
      redirect_to comments_path
    end
  end

   def delete
        @comment = Comment.find(params[:id]).destroy
        redirect_to comments_path
    end

  private

  def comment_params
    params.require(:comment).permit(:author, :text)
  end
end
