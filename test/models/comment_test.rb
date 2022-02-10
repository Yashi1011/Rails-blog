require "test_helper"
 
class CommentTest < ActiveSupport::TestCase
 test "should not save comment without commenter body and status" do
   article = Article.first
   comment = article.comments.new
   assert_not comment.save
 end
end
