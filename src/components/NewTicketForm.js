import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, id: v4()});
  }

  const newTicketFormStyles = {
    width: '40vw',
    margin: 'auto auto',
    backgroundColor: '#f5f5f5',
    outline: 'none',
    boxShadow: 'none',
    padding: '5%',
    border: '1px solid #008081',
    borderRadius: '5px',
    marginBottom: '2%'
  }

  return (
    <React.Fragment>
      <div style={newTicketFormStyles}>
        <form onSubmit={handleNewTicketFormSubmission}>
          <input
            type='text'
            name='names'
            placeholder='Pair Names' />
          <br/>
          <input
            type='text'
            name='location'
            placeholder='Location' />
          <br/>
          <textarea
            name='issue'
            placeholder='Describe your issue.' />
          <br/>
          <button className="buttonStyles" type='submit'>Help!</button>
        </form>
      </div>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;