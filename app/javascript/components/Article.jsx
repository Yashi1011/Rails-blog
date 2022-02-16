import React, {Component} from 'react'
import { Link } from 'react-router-dom'

function Article(props){
  const {articles, articles_public_count} = window;
  console.log("Articles are: ",articles);

  const article_list_items = articles.map((article) =>
    <li key={article.id}>
      <Link to={`/articles/${article.id}`}>
        {article.title}
      </Link>
    </li>
  );

  return (
    <div>
      <h1>Articles</h1>

      <div>Our blog has {articles_public_count} articles and counting!</div>

      <div>
        <ul>
          {article_list_items}
        </ul>
      </div>
    </div>
  );
}

export default Article