import React from 'react';
import "./style.css"

interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>> ,
    handleAdd : () => void,

}

const InputFeild: React.FC<Props> = ({todo,setTodo, handleAdd}) => {

  return <form className='input' onSubmit={handleAdd} > 

  <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)} placeholder="Enter a task" className='input__box' />

  <button title="Submit form" className='input__submit' type='submit'> Go</button>

   </form>
   
};

export default InputFeild;