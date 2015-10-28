import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { setName, setTime } from './actions';

class App extends Component {

    componentDidMount () {
        const { dispatch } = this.props;
        dispatch(setTime());
    }

    clickHandler (e) {
        const { dispatch, name } = this.props;

        dispatch(setName(name === 'zhao' ? 'chen' : 'zhao'));
    }

    render () {
        const { name, time } = this.props;
        return (
            <div>
                <p>{name}</p>
                <p>{time}</p>
                <a href="javascript:;" onClick={this.clickHandler.bind(this)}>click</a>
            </div>
        );
    }
}

const nameStateSelector = (state) => state.name;
const timeStateSelector = (state) => state.time;

const rootSelector = createSelector([nameStateSelector, timeStateSelector], (name, time) => {
    return { name, time };
});

export default connect(rootSelector)(App);