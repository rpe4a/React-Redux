import React, {Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                Привет из App.js, {this.props.surname} {this.props.name}!
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { ...state }
}

export default connect(mapStateToProps)(App);