import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTicket } from '../store/tickets';

let styles = {
  ticket: {
    width: '80%',
    margin: 'auto',
    border: '1px solid purple'
  },
};

const Ticket = (props) => {
  let { ticket } = props;
  let dispatch = useDispatch();
  return (
    <>
      <article key={ticket.id} style={styles.ticket}>
        <p>Student: {ticket.name}</p>
        <p>Table {ticket.table} needs help with {ticket.topic}</p>
        <button onClick={() => dispatch(removeTicket(ticket.id))}>Help Complete</button>
      </article>

    </>
  );
}

export default Ticket;
