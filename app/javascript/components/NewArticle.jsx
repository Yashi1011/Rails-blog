import React, {Component} from 'react'

class NewArticle extends Component{
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
    console.log(this.state);
    fetch('/articles', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(response => {
      if (response.ok) {
        
        window.location = "/articles/"+id;
        return response.json();
      }
      console.log(response);
      throw new Error("Network response was not ok.");
    })
    .then(console.log(data))
    .catch(error => console.log(error.message));

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>New Article</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label> <br />
          <input type="text" name="title" id="title" required onChange={this.handleChange} />
          <br />
          <label htmlFor="body">Body: </label> <br />
          <input type="text" id="body" name="body" required onChange={this.handleChange} />
          <br />
          <label htmlFor="status">Status: </label> <br />
          <select id="status" name="status" value={this.state.status} onChange={this.handleChange}>
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="archive">Archived</option>
          </select>
          <br />
          <input type="submit" value="Create Article" />
        </form>
      </div>
    );
  }
}

export default NewArticle