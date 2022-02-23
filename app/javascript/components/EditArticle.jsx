import React, {Component}  from 'react'
import { ReactDOM } from 'react-dom';

class EditArticle extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      status: 'public',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    // Should be done.
  }

  render() {
    const article = window.article;
    console.log(article);

    return (
      <div>
        <h1>Edit Article</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label> <br />
          <input type="text" name="title" id="title" defaultValue={article.title} onChange={this.handleChange} />
          <br />
          <label htmlFor="body">Body: </label> <br />
          <input type="text" id="body" name="body" defaultValue={article.body} onChange={this.handleChange} />
          <br />
          <label htmlFor="status">Status: </label> <br />
          <select id="status" name="status" defaultValue={article.status} onChange={this.handleChange}>
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="archive">Archived</option>
          </select>
          <br />
          <input type="submit" value="Edit Article" />
        </form>
      </div>
    );
  }
}

export default EditArticle