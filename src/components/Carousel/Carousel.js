import React, { useState, useEffect } from 'react';
import FriendList from '../../assets/FriendList.PNG';
import Card from '../../assets/Card.PNG';
import Reminders from '../../assets/Reminders.PNG';
import SuggestedFriendsList from '../../assets/SuggestedFriendsList.PNG';
import AddConfirmButton from '../../assets/AddConfirmButton.PNG';
import RemoveConfirmButton from '../../assets/RemoveConfirmButton.PNG';
import styles from './carousel.module.css';
import { BiArrowBack } from 'react-icons/bi';
import { IoMdArrowForward } from 'react-icons/io';

const Carousel = () => {
  const [activeImgId, setActiveImgId] = useState(0);
  useEffect(() => {
    let intervalID = setInterval(() => {
      setActiveImgId((activeImgId + 1) % 6);
    }, 3500);
    return () => clearInterval(intervalID);
  });
  const imageRenderer = () => {
    switch (activeImgId) {
      case 0:
        return (
          <div>
            <img alt='List of Friends' className={styles.slider} src={FriendList} ></img>
            <p className={styles.p}>List of Friends</p>
          </div>
        );
      case 1:
        return (
          <div>
            <img alt='Friend Card' className={styles.slider} src={Card} ></img>
            <p className={styles.p}>Friend Card</p>
          </div>
        );
        case 2:
          return (
            <div>
              <img alt='Friends BirthDay Reminders' className={styles.slider} src={Reminders} ></img>
              <p className={styles.p}>Friends BirthDay Reminders</p>
            </div>
          );
        case 3:
        return (
          <div>
            <img alt='Suggested Friend List' className={styles.slider} src={SuggestedFriendsList} ></img>
            <p className={styles.p}>Suggested Friend List</p>
          </div>
        );
        case 4:
        return (
          <div>
            <img alt='Modal to Confirm Add Friend' className={styles.slider} src={AddConfirmButton} ></img>
            <p className={styles.p}>Modal to confirm adding new friend</p>
          </div>
        );
        case 5:
        return (
          <div>
            <img alt='Confirm Remove Friend'className={styles.slider} src={RemoveConfirmButton} ></img>
            <p className={styles.p}>Remove friend confirmation</p>
          </div>
        );
      default:
        return (
          <div></div>
        );
    }
  }
  const goBack = () =>{
    if(activeImgId === 0){
      setActiveImgId(5);
    }
    else{
      setActiveImgId(activeImgId-1);
    }
  }
  const goForward = () => {
    setActiveImgId((activeImgId+1)%6);
  }
  return (
    <div className={styles.container}>
      <h3>Signup to explore more</h3>
      {imageRenderer()}
      <div onClick={goBack} className={styles.back}><BiArrowBack /></div>
      <div onClick={goForward} className={styles.forward}><IoMdArrowForward /></div>
      
    </div>
  );
}

export default Carousel;