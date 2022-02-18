import React from 'react';
import styles from './searchBar.module.css';

class SearchBar extends React.Component {
  timer = null;
  search = (e) => {
    if(this.timer != null){
      clearInterval(this.timer);
    }
    var fun = ()=>{
      if(e.target.value === '' || e.target.value === null){
        this.props.changeList(this.props.list);
      }
      else{
      this.props.changeList(this.props.list.filter(f=>e.target.value.toLowerCase()===f.userName));
      }
      return null;
    }
    this.timer = setTimeout(fun,800);
    
  }
  render(){
    return (
        <div className={styles.searchbox}>
          <input type="text" placeholder="Search Friend..." onChange={(e)=>this.search(e)} />
          <i className="search icon"></i>
        </div>
    );
  }
}

export default SearchBar;
