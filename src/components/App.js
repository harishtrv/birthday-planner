import React from 'react';
import Header from './Header';
import {Router, Route, Switch} from 'react-router-dom';
import FriendList from './FriendList';
import history from '../history';

const App = ()=>{

  return (<div>
    <Router history={history}>
    <Header />
    <Switch>
      <Route path='/' exact component={FriendList}></Route>
    </Switch>
    </Router>
    </div>);
}

export default App;