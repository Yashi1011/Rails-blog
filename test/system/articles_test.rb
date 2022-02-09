require "application_system_test_case"

class ArticlesTest < ApplicationSystemTestCase
  test "visiting the index" do
    visit articles_path
  
    assert_selector "h1", text: "Articles"
  end

  test "should create Article" do
    visit articles_path

    click_on "Create New Article"

    fill_in "Username", with: "dhh"
    fill_in "Password", with: "secret"

    click_on "Sign in"

    fill_in "Title", with: "Creating an Article"
    fill_in "Body", with: "Created this article successfully"

    click_on "Create Article"

    assert_text "Creating an Article"
  end
end
