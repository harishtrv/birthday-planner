import React from 'react';
import Header from './Header/Header';
import {Router, Route, Switch} from 'react-router-dom';
import FriendList from './FriendList/FriendList';
import history from '../history';
import Home from './Home/Home';
import EditFriend from './EditFriend/EditFriend';
import ShowFriendSuggestion from './ShowFriendSuggestion/ShowFriendSuggestion';
import DeleteFriend from './DeleteFriend/DeleteFriend';
import GroupChat from './GroupChat/GroupChat';
import AddFriend from './AddFriend/AddFriend';
import About from './About/About';

const App = ()=>{

  return (<div className='container1'>
    <Router history={history}>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cards' exact component={FriendList} />
      <Route path='/showFriendSuggestion' exact component={ShowFriendSuggestion} />
      <Route path='/edit/:userName' exact component={EditFriend} />
      <Route path='/remove/:userName' exact component={DeleteFriend} />
      <Route path='/grpchat/:userName' exact component={GroupChat} />
      <Route path='/add/:userName' exact component={AddFriend} />
      <Route path='/about' exact component={About} />
    </Switch>
    </Router>
    </div>);
}

export default App;