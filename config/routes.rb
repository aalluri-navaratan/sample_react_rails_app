SampleReactRailsApp::Application.routes.draw do
  resources :comments

  root :to => redirect("/comments")
  #root :to => "public#index"
  #get 'admin', :to => "access#index"
  #get 'show/:permalink', :to => 'public#show'
  
  #get 'admin', :to => "access#index"
  #root :to => "comments#index"
  resources :users
  #root :to => "users#index"
  match ':controller(/:action(/:id))', :via => [:get , :post]

end
