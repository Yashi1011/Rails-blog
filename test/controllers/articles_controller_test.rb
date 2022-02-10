require "test_helper"

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @article = articles(:one)
  end

  teardown do
    Rails.cache.clear
  end

  test "should get index" do
    get articles_url
    assert_response :success
  end

  test "should create article" do
    assert_difference("Article.count") do
      post articles_url, params: {
        article: {
          body: "rails is awesome!",
          title: "hello rails",
          status: "public"
        }
      }
    end
    assert_redirected_to article_path(Article.last)
    assert_equal "Article was successfully created.", flash[:notice]
  end

  test "should show article" do
    # article = articles(:one)
    get article_url(@article)
    assert_response :success
  end

  test "should delete article" do
    # article = articles(:one)
    assert_difference("Article.count", -1) do
      delete article_url(@article)
    end

    assert_redirected_to root_path
  end

  test "should update article" do
    # article = articles(:one)

    patch article_url(@article), params: {
      article: {
        title: "updated",
        body: "updated article",
        status: "public"
      }
    }
    assert_redirected_to article_path(@article)

    @article.reload
    assert_equal "updated", @article.title
  end
end
