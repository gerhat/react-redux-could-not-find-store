import React from 'react'
import { connect } from 'react-redux'
import { login, logout } from './reducer'

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h4>Connected component from my-private-package</h4>
        {
          this.props.isLoggedIn
          ?
            <p>
              {this.props.username}
              <button onClick={()=>this.props.login()}>
                logout
              </button>
            </p>
          :
            <p>
                <button>login</button>
            </p>
        }
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.header.isLoggedIn,
  username: state.header.username
})

const mapDispatchToProps = {
  login,
  logout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);