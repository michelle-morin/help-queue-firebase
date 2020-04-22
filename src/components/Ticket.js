import React from "react";
import PropTypes from "prop-types";

function Ticket(props){

  const ticketStyles = {
    borderBottom: '1px solid #008081',
    padding: '2%'
  }

  return (
    <React.Fragment>
      <div style={ticketStyles}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;