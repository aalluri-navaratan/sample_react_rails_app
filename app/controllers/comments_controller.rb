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

 #params.require(:comment).permit!
      #@comment = Comment.find(params[:id])
     # @comment.author = params[:comment][:author]
     # @comment.text = params[:comment][:text]
     
    
  
  def update
      params.require(:comment).permit!
      @comment = Comment.find(params[:id])
      @comment.author = params[:comment][:author]
      @comment.text = params[:comment][:text]
      if @comment.save
        flash[:notice] = "Comment updated successfully."
        render json: "ok"
      else
        #@subject_count = Subject.count
        render json: @comment.errors.full_messages
      end
    end
      #   #flash[:notice] = "Comment updated successfully."
      #   if request.xhr?
      #     render :json => "Saved the commnet"
      #   else
      #     redirect_to comments_path
      #   end
      # #render  json: "save ok"
      # #render comments_path
      # else
      #   #@subject_count = Subject.count
      #   render json: @comment.errors.full_messages
      # end

   # end
        


  

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
