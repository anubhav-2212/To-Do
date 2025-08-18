import React from 'react'
import "./Card.css"

const Card = ({allTask}) => {
    // console.log(allTask)
    
    
  return (
    <>
    <div className="card-container">
   {allTask?.map((task,index)=>{
    return(
     <div className="card" style={{width: '18rem'}}
     key={index}>
  <div className="card-body">
    <h5 className="card-title">{task?.title}</h5>
    <p className="card-text">{task?.description} </p>
    <p className="card-text"> {task?.createdBy.name}</p>
    
    <hr />
    <p>Date:{task?.createdAt.substring(0,10)}</p>
    <span className={task?.isCompleted===true?"task-cmp":"task-inc"}>
        {task.isCompleted===true?"Complete":"Incomplete"}
    </span>
    <div className='card-border bg-transparent border-primary' >
        <button className='btn btn-warning me-2' title='Edit Task'>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className='btn btn-danger' title='Delete Task'>
            <i className="fa-solid fa-trash ms-2" ></i>
        </button>
    </div>
   
  </div>
</div>
    

  ) })}
  


 

</div>

     
  
    
    
    </>
  )
}

export default Card

//   <div className="card border-primary mb-3"
    //      style={{maxWidth:"18rem"}}
    //         key={index}>
    // <div className="card-header">
    //     <div className="chead">
    //         <h6>{task?.title}</h6>
    //         <h6 className={task?.isCompleted ===true?"task-cmp":"task-inc"}>
    //             {task?.isCompleted===true?"Completed":"incomplete"}
    //         </h6>
    //     </div>
    // </div>


    //      </div>
   