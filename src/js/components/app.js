import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import User from './user';
import Page from './page';


class App extends Component {
    render() {

        const {user, page} = this.props

        return (
            <div className='container-fluid'>
                <User name={user.name}/>
                <Page year={page.year} photos={page.photos}/>
            </div>
        );
    }
}

App.propTypes = {
    user: PropTypes.object.isRequired,
    page: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

export default connect(mapStateToProps)(App);