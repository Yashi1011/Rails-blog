import React, {Component} from 'react'
import { Redirect } from "react-router-dom";

function Show(props){

  function handleDelete(id, event){
    console.log(id);
    const url = "/articles/"+id;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        window.location = "/";
        return response.json();
      }
      console.log(response);
      throw new Error("Network response was not ok.");
    })
    .catch(error => console.log(error.message));

  }

  const article = window.article;
  console.log(article);

  const edit_and_destroy_links = (
    <ul>
      <li>
        <a href={`/articles/${article.id}/edit`}>Edit</a>
      </li>
      <li>
        <button onClick={(e) => handleDelete(article.id, e)}>Delete</button>
      </li>
    </ul>
  );

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      {edit_and_destroy_links}

      <div>
        <a href={`/`}>Articles</a>
      </div>
    </div>
  );
  
}

export default Show