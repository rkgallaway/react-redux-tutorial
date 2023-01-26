import React from 'react';

let styles = {
  ticket: {
    width: '80%',
    margin: 'auto',
    border: '1px solid purple'
  },
};

class Ticket extends React.Component {
  render() {
    let { ticket, removeTicket }= this.props;
    return (
      <>
        <article key={ticket.id} style={styles.ticket}>
          <p>Student: {ticket.name}</p>
          <p>Table {ticket.table} needs help with {ticket.topic}</p>
          <button onClick={() => removeTicket(ticket.id)}>Help Complete</button>
        </article>

      </>
    );
  }
}

export default Ticket;
