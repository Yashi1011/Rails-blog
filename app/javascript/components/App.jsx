import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Articles from './Articles'
import Show from './Show'
import NewArticle from './NewArticle'
import EditArticle from './EditArticle'

class App extends Component{
  render() {
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Articles />} />
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/articles/:id" element={<Show />} />
          <Route exact path="/articles/new" element={<NewArticle />} />
          <Route exact path="/articles/:id/edit" element={<EditArticle />} />
        </Routes>
      </Router>
    );
  }
}

export default App