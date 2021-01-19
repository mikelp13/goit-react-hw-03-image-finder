import React from "react";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <p className="ErrorNotification">Whoops, something went wrong: {message}</p>;
};

export default Notification;

Notification.propTypes ={
  message: PropTypes.string.isRequired
}
