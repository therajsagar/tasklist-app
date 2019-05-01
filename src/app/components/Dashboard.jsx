import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

export const Dashboard = ({ groups }) => (
  <div>
    <h1>Dashboard</h1>
    {groups.map(i => (
      <ConnectedTaskList key={i.id} {...i} />
    ))}
  </div>
);

const mapStateToProps = ({ groups }) => ({ groups });

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
