import React from 'react';
import ExTab from '../../tabs/ExTab';

// This begins as an empty container, but we will have a function that fills it 
// on tab clicks.  

// DEPRECATED

const View = ({taskKey, deleteTaskOnClick}) => (
    <div className="tab-display">
        <ExTab taskKey={taskKey} deleteTaskOnClick={deleteTaskOnClick}/>
    </div>
);

export default View;
