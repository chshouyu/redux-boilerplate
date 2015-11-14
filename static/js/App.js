import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setName } from './actions';

class App extends Component {

    clickHandler (e) {
        const { dispatch, name } = this.props;

        dispatch(setName(name === 'zhao' ? 'chen' : 'zhao'));
    }

    render () {
        const { name } = this.props;
        return (
            <div>
                <p>{name}</p>
                <a href="javascript:;" onClick={this.clickHandler.bind(this)}>click</a>
            </div>
        );
    }
}

const nameStateSelector = (state) => state.name;

const rootSelector = createSelector([nameStateSelector], (name) => {
    return { name };
});

export default connect(rootSelector)(App);