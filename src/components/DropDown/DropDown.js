import React from 'react';
import styles from './dropdown.module.css';

class DropDown extends React.Component {
  sort = (e) => {
      if(e.target.value === '' || e.target.value === null){
        this.props.changeList(this.props.list);
        return null;
      }
      switch(e.target.value){
        case '0':
            this.props.changeList(this.props.list.sort((f1,f2)=>f1.userName.toLowerCase()>f2.userName.toLowerCase() ? 1 : -1));
            break;
        case '1':
            this.props.changeList(this.props.list.sort((f1,f2)=>f1.DOB>f2.DOB ? 1 : -1));
            break;
        default :
            return null;
      }
  }
  render(){
    return (
      <select className={styles.select} onChange={(e)=>this.sort(e)}>
        <option value="">Sort By</option>
        <option value="0">Sort By Name</option>
        <option value="1">Sort By DOB</option>
      </select>
    );
  }
}

export default DropDown;
