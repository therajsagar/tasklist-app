import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

export const Dashboard = ({ groups }) => (
  <div className='row'>
    <h1>Dashboard</h1>
    {groups.map(i => (
      <ConnectedTaskList key={i.id} {...i} className='col' />
    ))}
  </div>
);

const mapStateToProps = ({ groups }) => ({ groups });

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
