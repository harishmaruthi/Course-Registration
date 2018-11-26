import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import RegistrarDashboard from "./RegistrarDashboard";
import ProfessorDashboard from "./ProfessorDashboard";
import StudentDashboard from "./studentdashboard";
class DashBoardLogic extends Component {
  render() {
    const { user } = this.props.auth;
    console.log(this.props.auth);
    let dashboardContent;
    if (user.user_type === "ADMIN") {
      console.log("not me");
      dashboardContent = <RegistrarDashboard />;
    } else if (user.user_type === "PROFESSOR") {
      console.log("me");
      dashboardContent = <ProfessorDashboard />;
    } else {
      console.log("//not me");
      dashboardContent = <StudentDashboard />;
    }

    return <div> {dashboardContent} </div>;
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});
DashBoardLogic.propTypes = {
  auth: PropTypes.object.isRequired
};
export default connect(mapStateToProps)(DashBoardLogic);
