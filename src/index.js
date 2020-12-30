
import React from 'react';
import ReactDom from 'react-dom';

import './index.css'
import { bookArray } from "./books";
import Book from "./book"

//setup vars




function BookList(){

  return (<section className='booklist'>

       {

         bookArray.map(book =>{
          return <Book key={book.id}  {...book}/>
         })
       }
     

  </section>
          
    
    ); 
}




ReactDom.render(<BookList></BookList>,document.getElementById('root'));


