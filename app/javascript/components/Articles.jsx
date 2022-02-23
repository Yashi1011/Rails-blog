import React, {Component} from 'react'
import { Link } from 'react-router-dom'

function Articles(props){
  const {articles, articles_public_count} = window;
  console.log("Articles are: ",articles);

  const article_list_items = articles.map((article) =>
    <li key={article.id}>
      <a href={`/articles/${article.id}`}>
        {article.title}
      </a>
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

      <div>
        <a href={`/articles/new`}>Create New Article</a>
      </div>
    </div>
  );
}

export default Articles