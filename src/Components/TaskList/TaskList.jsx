import React from "react";
import TaskAccepted from "./TaskAccepted";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[40%] overflow-x-auto flex-nowrap py-5 flex items-center justify-start gap-5  w-full mt-10"
    >
      {data.tasks.map((elem , idx)=>{
        if(elem.active){
          return <TaskAccepted key={idx} data={elem} />
        }
        if(elem.new){
          return <NewTask key={idx}  data={elem}/>
        }
        if(elem.completed){
          return <CompleteTask key={idx}  data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={idx}  data={elem}/>
        }
      })}
    </div>
  );
};

export default TaskList;
