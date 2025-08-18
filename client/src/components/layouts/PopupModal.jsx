import React from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'


const PopupModal = ({title,setTitle,description,setDescription,showModal,setShowModal}) => {
    const handleClose=()=>{
        setShowModal(false)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/v1/todo/createtodo',{title,description},
                {withCredentials:true}
            )
            .then((res)=>{
                toast.success(res?.data?.message)
                setShowModal(false)
                setTitle("")
                setDescription("")

            })
            
        } catch (err) {
            console.log(err)
            toast.error(err.response?.data?.message||"Something Went Wrong")
            
            
        }
    }
  return (<>
    {showModal && (
    <div className='modal' tabIndex="-1" role='dialog' style={{display:"block",backgroundColor:'rgba(0,0,0,0.5)'}}>
        <div className='modal-dialog' role='document'>
            <div className='modal-content'>
                <div className="modal-header">
                    <h5 className='modal-title'>
                        Add New Task
                    </h5>
                    <button className='btn-close' aria-label='close' onClick={handleClose}>
                        {/* <span aria-hidden="true">&times;</span> */}
                    </button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label className='form-label'>Title</label>
                        <input type="text" className='form-control' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" id="floatingTextarea" value={description} onChange={(e)=>{setDescription(e.target.value)}} ></textarea>
                        <label htmlFor="floatingTextarea">Description</label>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" onClick={handleClose}>Close</button>
                    <button className="btn btn-primary" onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </div>
    
      
    </div>
    )}
    </>
    
  )
}

export default PopupModal
