import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import './post_page.css';

export default class Post_page extends Component{
    async postData(){
        try {
          let result = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
              title: 'request',
              body: 'post',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
        
    } catch(e){
            console.log(e)
        }
    }
    
    async UpdateData(){
        try {
          let result = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
              id: 1,
              title: 'post',
              body: 'request',
              userId: 1,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
        
    } catch(e){
            console.log(e)
        }
    }


    render() {
        return (
            
            <section className='Post_Data'>
            <h2> Post_page </h2>
            <h2> Result In Console </h2>
            <button onClick={() => this.postData()}>Press to post</button>
            <button onClick={() => this.UpdateData()}>Update post</button>
            </section>
            
           
        );

    }

}