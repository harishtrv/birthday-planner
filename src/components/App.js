import React from 'react';
import Header from './Header';
import {Router, Route, Switch} from 'react-router-dom';
import FriendList from './FriendList';
import history from '../history';
import Home from './Home';
import FriendForm from './FriendForm';

const App = ()=>{

  return (<div className='ui container'>
    <Router history={history}>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cards' exact component={FriendList} />
      <Route path='/form' exact component={FriendForm} />
    </Switch>
    </Router>
    </div>);
}

export default App;