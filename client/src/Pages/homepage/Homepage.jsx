import React, { useEffect, useState } from 'react'
import Navbar from '../../components/layouts/navbar'
 import './Homepage.css'
import PopupModal from '../../components/layouts/PopupModal'
import Card from '../../components/Cards/Card'
import axios, { all } from 'axios'

const Homepage = () => {
  
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")
  const[showModal,setShowModal]=useState(false)
  const[allTask,setAllTask]=useState([])
  


  
  const openModalHandler=()=>{
    setShowModal(true)
  }
  useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/v1/todo/gettodo",
        {
          withCredentials: true,
        }
      );
      // console.log(res.data);
      setAllTask(res?.data?.Todos)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [allTask]);

 
  return (
    <>
   <Navbar/>
   <div className="container">
    <div className="add-task">
      <h1>Your Task</h1>
      <input type="search" placeholder='Search Your task' /> 
      


      <button className='btn btn-primary'
      onClick={openModalHandler}>
      Create Task <i className="fa-solid fa-plus"></i></button>
      {/* <h6>{JSON.stringify(allTask)  }</h6> */}

    </div>
    {allTask && <Card allTask={allTask}/>}
    <PopupModal
    title={title}
    setTitle={setTitle}
    description={description}
    setDescription={setDescription}
    showModal={showModal}
    setShowModal={setShowModal}
     />

   </div>
      </>
  )
}

export default Homepage
