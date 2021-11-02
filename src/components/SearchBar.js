import React from 'react';

class SearchBar extends React.Component {
  timer = null;
  search = (e) => {
    if(this.timer != null){
      clearInterval(this.timer);
    }
    var fun = ()=>{
      if(e.target.value == '' || e.target.value == null){
        this.props.changeList(this.props.list);
      }
      else{
      this.props.changeList(this.props.list.filter(f=>e.target.value==f.name));
      }
      return null;
    }
    this.timer = setTimeout(fun,800);
    
  }
  render(){
    return (
      <div className="ui category search">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Search Friend..." onChange={(e)=>this.search(e)} />
          <i className="search icon"></i>
        </div>
      </div>
    );
  }
}

export default SearchBar;
