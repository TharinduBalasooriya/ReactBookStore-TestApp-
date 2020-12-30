
import React from 'react'

const book = (props) =>{
    
   const {img , tittle, author} = props

   const complexExample = ()=>{
      console.log(author);
   };
  
  
  return(
    <article onMouseOver={()=> {
      console.log(tittle);
    }}>
      <h4>{tittle}</h4>
       <img src={img} alt=""/>
       <div >{author}</div>
       <button type="button" onClick={()=>{alert('Hello World')}}>Click On Me</button>
       <button type="button" onClick={()=>complexExample()}></button>
    </article>
  );
}

export default book


