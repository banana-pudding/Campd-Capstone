import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux';
import './Style.scss';
import ViewAProject from '../../containers/ViewAProject';




class ViewProject extends Component {



  render() {



    return (
      <Container className="mt-5">
        <div >
          <div >
            <ViewAProject />

          </div>
        </div>
      </Container>
    );
  }
}



const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};


export default connect(
  mapStateToProps
)(ViewProject);
