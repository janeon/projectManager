/* 
 * This defines how we want to display the tasks. 
 */
import React from 'react';
import "./TaskList.css";
import NewTaskButton from './NewTaskButton';

// 'taskElementList' is a list of html elements that represent tasks. 
const View = ({taskTitleElementList}) => (
    <div id="tasklist_container">
            <div className="task" id="addTask">
                

            </div>
            <div id="tasklist">
                {taskTitleElementList}
            </div>
            
    </div>
);

export default View;