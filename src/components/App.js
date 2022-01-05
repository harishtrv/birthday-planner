import React from 'react';
import Header from './Header/Header';
import {Router, Route, Switch} from 'react-router-dom';
import FriendList from './FriendList/FriendList';
import history from '../history';
import Home from './Home/Home';
import EditFriend from './EditFriend/EditFriend';
import AddFriend from './AddFriend/AddFriend';
import DeleteFriend from './DeleteFriend/DeleteFriend';

const App = ()=>{

  return (<div className='container1'>
    <Router history={history}>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cards' exact component={FriendList} />
      <Route path='/add' exact component={AddFriend} />
      <Route path='/edit/:id' exact component={EditFriend} />
      <Route path='/delete/:id' exact component={DeleteFriend} />
    </Switch>
    </Router>
    </div>);
}

export default App;