require "test_helper"
 
class CommentsControllerTest < ActionDispatch::IntegrationTest
 setup do
   @article = articles(:one)
   @comment = comments(:one)
 end
 
 teardown do
   Rails.cache.clear
 end
 
 test "should create comment" do
   assert_difference("Comment.count") do
     post article_comments_url(@article), params: {
       comment: {
         commenter: "sample",
         body: "new comment created",
         status: "public"
       }
     }
   end
   assert_redirected_to article_path(@article)
 end
 
 test "should delete comment" do
   assert_difference("Comment.count", -1) do
     delete article_comment_path(article_id: @article, id: @comment)
   end
 
   assert_redirected_to article_path(@article)
 end
end
