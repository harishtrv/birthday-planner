import React from 'react';

class DropDown extends React.Component {
  sort = (e) => {
      if(e.target.value == '' || e.target.value == null){
        this.props.changeList(this.props.list);
        return null;
      }
      switch(e.target.value){
        case '0':
            this.props.changeList(this.props.list.sort((f1,f2)=>f1.name>f2.name));
            break;
        case '1':
            this.props.changeList(this.props.list.sort((f1,f2)=>f1.birthday>f2.birthday));
            break;
      }
  }
  render(){
    return (
      <select class="ui dropdown" onChange={(e)=>this.sort(e)}>
        <option value="">Sort By</option>
        <option value="0">Sort By Name</option>
        <option value="1">Sort By DOB</option>
      </select>
    );
  }
}

export default DropDown;
