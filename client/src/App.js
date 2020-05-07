
import React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Pages/Search'
import SingleMovie from './Pages/SingleMovie';
import CreateReviews from './Pages/CreatReviews';

function App() {
  return (
    <Provider store={store}>
      <Router>

        <Switch>
          <Route path='/' exact>
            <Search />
          </Route>
          <Route path="/single-movie/:id">
            <SingleMovie />
          </Route>
          <Route path="/create-review">
            <CreateReviews />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;