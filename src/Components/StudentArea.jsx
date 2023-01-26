import React from 'react';
import pic from '../assets/student-area.png';
import Ticket from './Ticket';

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

class StudentArea extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tickets: [
        {id: 123, name: 'Jo (they, them)', table: 1, topic: 'Salmon Cookies'},
        {id: 456, name: 'Jo (she, her)', table: 2, topic: 'City Explorer'},
        {id: 789, name: 'Jo (he, him)', table: 3, topic: 'Auth'}
      ],
    };
  }

  removeTicket = (id) => {
    let remainingTickets = this.state.tickets.filter(ticket => ticket.id !== id);
    this.setState({tickets: remainingTickets})
  }
  render() {
    const renderList = this.state.tickets.map(ticket => (
      <Ticket ticket={ticket} removeTicket={this.removeTicket} />
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
      </div >
    );
  }
}

export default StudentArea;
