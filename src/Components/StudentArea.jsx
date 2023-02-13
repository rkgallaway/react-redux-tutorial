import React from 'react';
import pic from '../assets/student-area.png';
import Ticket from './Ticket';
import { useSelector } from 'react-redux';
import AddForm from './AddForm';

const styles = {
  div: {
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
    display: 'flex'
  },
  h1: {
    color: 'purple'
  },
  img: {
    width: '400px'
  },
  ticket: {
    width: '80%',
    margin: 'auto',
    border: '1px solid purple'
  },
  article: {
    width: '80%',
    margin: 'auto',
  }
}

const StudentArea = (props) => {
  const { tickets } = useSelector((reduxState) => reduxState);
  

  const renderList = tickets.map(ticket => (
    <Ticket ticket={ticket} />
  ))
  return (
    <div style={styles.div}>
      <article style={styles.article}>
        <h1 style={styles.h1} >Collaboration Station</h1>
        <img style={styles.img} src={pic} alt="sunny beach" />


      </article>
      <article style={styles.article}>
        {renderList}
      </article>
      <AddForm />
    </div >
  );
}

export default StudentArea;
