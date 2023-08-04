import React, { useState } from 'react'
const AddTodo = (props) => {
    
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or desc cannot be blank")
        }
        else{
            props.addTodo(title,desc);
        }
        
    }
    let style = {
        color: '#8062D6',
    }
    return (
        <div className='container my-4'>
            <h3 className='text-center' style={style}>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" style={style}>Title</label>
                    <input type="text" value={title} className="form-control" id="title" aria-describedby="emailHelp" onChange={(e)=>{
                        setTitle(e.target.value)
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label" style={style}>Description</label>
                    <input type="text" value={desc} className="form-control" id="desc" onChange={(e)=>{
                        setDesc(e.target.value)
                    }}/>
                </div>
                <button type="submit" className="btn bg-dark" style={style}><i className='fa fa-plus'> Add</i></button>
            </form>
        </div>
    )
}

export default AddTodo
