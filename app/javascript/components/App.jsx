import React, {Component} from 'react'
import { Route, Routes, Switch } from 'react-router-dom'
import Article from './Article'
import Show from './Show'

class App extends Component{
  render() {
    return(
      // <Switch>
      <Routes>
        <Route exact path="/" element={<Article />} />
        <Route path="/articles/:id" element={<Show />} />
      </Routes>
      // </Switch>
      // <div>Hello react</div>
    );
  }
}

export default App