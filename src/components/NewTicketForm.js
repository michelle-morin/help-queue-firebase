import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm.js';
import Moment from 'moment';

function NewTicketForm(props){

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value, 
      location: event.target.location.value, 
      issue: event.target.issue.value, 
      id: v4(),
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    });
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
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
      </div>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;