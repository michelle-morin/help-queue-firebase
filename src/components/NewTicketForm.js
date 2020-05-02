import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm.js';
import { useFirestore } from 'react-redux-firebase'

function NewTicketForm(props){

  const firestore = useFirestore();

  function addTicketToFirestore(event) {
    event.preventDefault();
    props.onNewTicketCreation();
    return firestore.collection('tickets').add(
      {
        names: event.target.names.value, 
        location: event.target.location.value, 
        issue: event.target.issue.value, 
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
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
        formSubmissionHandler={addTicketToFirestore}
        buttonText="Help!" />
      </div>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;