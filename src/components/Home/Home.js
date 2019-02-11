import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {getContacts} from '../../action/contactAction'


class Home extends Component {
  componentDidMount (){
    
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }


}
Home.propTypes = {
  contacts: PropTypes.array.isRequired,
  //getContact: PropTypes.func.isRequired
}
const mapStateToProps = (state)=>({

  contacts : state.contact12.contacts
});

export default connect(mapStateToProps,{getContacts})(Home);
