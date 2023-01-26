import React from 'react';
import pic from '../assets/student-area.png';
import Ticket from './Ticket';
import { removeTicket } from '../store/tickets';
import { connect } from 'react-redux';

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

  render() {
    const renderList = this.props.tickets.map(ticket => (
      <Ticket ticket={ticket} removeTicket={this.props.removeTicket} />
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

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  }
};

const mapDispatchToProps = {
  removeTicket
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentArea);
