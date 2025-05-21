import React from "react";
import TaskAccepted from "./TaskAccepted";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  console.log(data)
  return (
    <div
      id="tasklist"
      className="h-[40%] overflow-x-auto flex-nowrap py-5 flex items-center justify-start gap-5  w-full mt-10"
    >
      {data.tasks.map((elem , idx)=>{
        if(elem.active){
          return <TaskAccepted key={idx}/>
        }
        if(elem.new){
          return <NewTask key={idx}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx}/>
        }
         if(elem.failed){
          return <FailedTask key={idx}/>
        }
      })}
    </div>
  );
};

export default TaskList;
