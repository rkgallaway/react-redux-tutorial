import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTicket } from '../store/tickets';

const AddForm = () => {
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
  const [topic, setTopic] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = uuidv4();
    const ticket = { id, name, table, topic }
    // console.log(ticket);
    dispatch(addTicket(ticket));
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input onChange={(e) => setName(e.target.value)} />
        </label>
        <label>Table:
          <input onChange={(e) => setTable(e.target.value)} />
        </label>
        <label>Topic:
          <input onChange={(e) => setTopic(e.target.value)} />
        </label>
        <button type="submit">Submit</button>

      </form>
    </>
  )
};

export default AddForm;
