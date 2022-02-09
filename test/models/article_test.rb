require "test_helper"

class ArticleTest < ActiveSupport::TestCase
  test "should not save article without title" do
    article = Article.new
    assert_not article.save
  end

  test "should report error" do
    assert_raises(NameError) do
      undefined_variable
    end
  end
end
