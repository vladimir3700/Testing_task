import React, {Component} from 'react';
import "./home.css";
import Form from "react-bootstrap/Form";

export default class Home extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:[],
            isLoaded: false,
        }
    }
    componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=9')
     .then(res => res.json())
     .then(json =>{
      this.setState({
          isLoaded: true,
          items: json,
          
      })
     });
    }
 render() {

     var {isLoaded, items} = this.state;
     if (!isLoaded){
         return <div>Loading...</div>
     }

     else  {
     return (
         <Form>
         <div className="Api">
            <h2>Result Get posts</h2>
             <ul>              
                     {items.map(item => (
                        
                      <li key={item.id}>
                          
                         ID: {item.id}  | Body: {item.body}
                          
                      </li>
                        
                     ))};
             </ul>

            
         </div>
         </Form>
         
     );
     }
 }
}