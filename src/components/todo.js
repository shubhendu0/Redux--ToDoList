import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { addTodo, deleteTodo, clearTodo, updateTodo, updateStatus} from '../redux/actions/action';
import { useState , useEffect, useRef } from 'react';


export const Todo = () => {

    const list = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const [showEdit, setShowEdit] = useState(-1);
    const [editValue, setEditValue]=useState('');

    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const keyDownAdd = (e) => {
        if (e.key === 'Enter') {  
            handleSubmit(e);
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(todo.length < 1){
            alert("Enter something")
            return false;
        }
        let time = new Date().getTime();
        let todoObj={
            id: time,
            todo: todo,
            isCompleted: false,
            lastUpdated: time
        }
        setTodo('');
        dispatch(addTodo(todoObj))
    }

    // update form submit
    const editSubmit = (e,id) =>{
        e.preventDefault();
        if(editValue.length < 1){
            alert("Enter something")
            return false;
        }
        let time = new Date().getTime();
        let editedObj={
            id: id,
            todo: editValue,
            lastUpdated: time
        }
        dispatch(updateTodo(editedObj));
        setEditValue("")
    }

    return (
        <div className="main-container">
            <div className='header'> To-Do-List </div>
            
            <div className='input-box' >
                <input ref={inputRef} onKeyDown={keyDownAdd} className='addTodo' type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
                <button className='outer-btn' onClick={handleSubmit}> Add-Todo </button>
            </div>

            <div className='output-box' >
                {         
                    list.length > 0
                    ?    
                    (    
                        <table>
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>ToDo</th>
                                    <th>Created At</th>
                                    <th>Last Updated</th>
                                    <th>Status</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            { 
                                list.map((item,index) => {
                                return(  
                                    <tbody>                                 
                                        <tr>
                                            <td> {index +1} </td>
                                            <td> {item.todo} </td>
                                            <td> {new Date(item.id).toLocaleString()} </td>
                                            <td> {item.id < item.lastUpdated
                                                ? new Date(item.lastUpdated).toLocaleString()
                                                : "-----"
                                                } 
                                            </td>
                                            <td> <button className='inner-btn' onClick={() => dispatch(updateStatus(item))}> {item.isCompleted === true ? "👌" : " X"}  </button> </td>
                                            <td> <button className='inner-btn' onClick={() => setShowEdit(item.id)}> Update </button>
                                                {
                                                    showEdit === item.id 
                                                    ?   
                                                    (
                                                        <div className='edit-box'>
                                                            <input className='inner-btn' type="text" value={editValue} onChange={(e)=> setEditValue(e.target.value)}/>
                                                            <div className='edit-box'>
                                                                <button className='inner-btn' onClick={(e) => {editSubmit(e, item.id); setShowEdit(-1)}}> Save </button>
                                                                <button className='inner-btn' onClick={() => setShowEdit(-1)}> Cancel </button>
                                                            </div>
                                                            
                                                        </div>
                                                    )
                                                    :   null
                                                }  
                                            </td>
                                            <td> <button className='inner-btn' onClick={()=> dispatch(deleteTodo(item.id))}> Delete </button>    </td>
                                        </tr>
                                    </tbody> 
                                )
                                })
                            }
                        </table>                               
                    ) 
                    :
                    null           
                }

                {
                    list.length > 1
                    ?
                    ( 
                        <div className='clear-box'>
                            <button className='outer-btn' onClick={()=>{ dispatch(clearTodo())}}> Clear-All </button> 
                        </div>
                    )
                    : null
                }
            </div>
                
        </div>   
    )
}
