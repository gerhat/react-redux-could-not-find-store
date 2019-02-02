import React from 'react';
import { connect } from "react-redux";
import { increment } from '../../redux/reducers/counter'

class Incrementer extends React.Component {
  render() {
    return (
      <div className="Incrementer">
        <button
          onClick={() => this.props.increment()}
        >Click me to increase count</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  increment
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Incrementer);
