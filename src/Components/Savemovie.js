import React from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom';
import {Form,Button,Container,} from 'react-bootstrap'
import NavigationBar     from './NavigationBar';

class Savemovie extends React.Component{
    constructor()
    {
        super();
        this.state={
         movieName:'',
         movieRunningTime:''
        };
    }

    onChange=(e)=>{
        const state=this.state
        state[e.target.name]=e.target.value;
        this.setState(state)
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const{movieName,movieRunningTime}=this.state
        console.log(movieName + ":"+ movieRunningTime)
        Axios.post('http://localhost:8080/saveMovie',{movieName,movieRunningTime})
        .then((res)=>{
            if(res.status===200)
            {
                alert("contact saved")
                document.title='contact saved';
            }
        });
    }

    render(){
        const {movieName,movieRunningTime}=this.state;
        console.log(movieName+":"+movieRunningTime)
        return(
              
            <Container c>
            <NavigationBar/>
              
            <h3>Save Movie</h3>
<Form onSubmit={this.onSubmit} className="mt-1">
    <Form.Group controlId="formBasicEmail">
      <Form.Label aria-setsize="20">MovieName:</Form.Label>
      <Form.Control type="text" placeholder="Enter MovieName" name="movieName" value={movieName} onChange={this.onChange}/>
       
    </Form.Group>  
    
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Movie Running Time:</Form.Label>
      <Form.Control type="text" placeholder="Enter MovieRunningTime" name="movieRunningTime" value={movieRunningTime} onChange={this.onChange}/>
       
    </Form.Group>  
    <Button variant="dark" type="submit">Save Movie</Button>
      </Form>
      </Container>
    );
    }
}


export default Savemovie;