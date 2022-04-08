import Home from './home';
import Navbar from './navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './create';
import PostDetail from './post-details';
import NotFound from './not-found';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/create" >
              <Create />
            </Route>
            <Route path="/posts/:id" >
              <PostDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
