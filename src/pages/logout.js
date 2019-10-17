import { Component } from 'react';
import { navigate } from 'gatsby';
import Cookies from 'js-cookie';

class Logout extends Component {
  componentDidMount() {
    Cookies.remove('_sb_access_token');
  }

  render() {
    navigate('/');
    return null;
  }
}

export default Logout;
