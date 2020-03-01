import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alert: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  // *Get alerts from the state, for map in the component.
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
