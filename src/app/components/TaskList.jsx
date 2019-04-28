import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({tasks, name}) => (
    <div>
        <h4>{name}</h4>
        <div>{tasks.map(i=> <div>{i.name}</div>)}</div>
    </div>
)

function mapStateToProps(state, ownProps){
    let groupID = ownProps.id; 
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(i=> i.group === groupID)
    }
}

export const ConnectedTaskList =  connect(mapStateToProps)(TaskList);