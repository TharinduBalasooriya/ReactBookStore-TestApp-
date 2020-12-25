
import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

function BookList(){

  return (<section className='booklist'>
    This is a BookList

        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>

  </section>
          
    
    ); 
}


const Book = () =>{

  return(
    <article >
      <Title></Title>
      <Image></Image>
      <Author></Author>
    </article>
  );
}
const Title = () => <h4>A Promised Land</h4>;
const Author = () =>{

  return(
    <div > Barack Obama</div>
  );
}
const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._AC_SX184_.jpg" alt=""/>
ReactDom.render(<BookList></BookList>,document.getElementById('root'));


