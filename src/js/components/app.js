import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from '../actions/pageActions';
import User from './user';
import Page from './page';


class App extends Component {

    render() {
        const {user, page, pageActions } = this.props;

        return (
            <div className='container-fluid'>
                <User name={user.name}/>
                <Page year={page.year} photos={page.photos} setYear={pageActions.setYear} />
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

function mapDispatchToProps(dispatch){
    return {
        pageActions: bindActionCreators(pageActions, dispatch)        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);