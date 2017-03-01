import React from 'react';
import {connect} from 'react-redux';

import List from './list';
import AddForm from './add-form';

import {addList, fetchBoardSuccess} from '../actions';


export class Board extends React.Component {
    constructor(props) {
        super(props);

        fetch('/board').then(res => {
            if (!res.ok) {
                return;
            }
            return res.json();
        }).then(board => {
            this.props.dispatch(fetchBoardSuccess(board));
        });
    }

    addList(title) {
        this.props.dispatch(addList(title));
    }

    render() {
        const lists = this.props.lists.map((list, index) =>
            <List key={index} index={index} {...list} />
        );

        return (
            <div className="board">
                <h2>{this.props.title}</h2>
                <div className="lists">
                    {lists}
                    <AddForm type="list" onAdd={title => this.addList(title)} />
                </div>
            </div>
        );
    }
}

Board.defaultProps = {
    title: 'Board'
};

const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(Board);

