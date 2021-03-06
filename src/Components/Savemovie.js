import React from 'react';
import Axios from 'axios'

import {Form,Button,Container,} from 'react-bootstrap'
import NavigationBar     from './NavigationBar';

class Savemovie extends React.Component{
    constructor()
    {
        super();
        this.state={
         movieName:'',
         movieRunningTime:'',
         hero:'',
         heroin:'',
         director:'',
         genre:''
        };
    }

    onChange=(e)=>{
        const state=this.state
        state[e.target.name]=e.target.value;
        this.setState(state)
    }

    onSubmit=(e)=>{
        e.preventDefault();

        const{movieName,movieRunningTime,hero,heroin,director,genre}=this.state
        console.log(movieName + ":"+ movieRunningTime)
        Axios.post('http://localhost:8080/saveMovie',{movieName,movieRunningTime,hero,heroin,director,genre})
        .then((res)=>{
            if(res.status===200)
            {
                alert("contact saved")
                document.title='contact saved';
            }
        });
    }

    render(){
        const {movieName,movieRunningTime,hero,heroin,director,genre}=this.state;
        console.log(movieName+":"+movieRunningTime)
        return(
              
            <Container >
            <NavigationBar/>
              
            <h3>Save Movie</h3>
<Form style={{marginTop:5.00}} onSubmit={this.onSubmit} className="mt-1">
    <Form.Group controlId="formBasicEmail">
      <Form.Label aria-setsize="20">MovieName:</Form.Label>
      <Form.Control type="text" placeholder="Enter MovieName" name="movieName" value={movieName} onChange={this.onChange}/>
       
    </Form.Group>  
    
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Heroin:</Form.Label>
      <Form.Control type="text" placeholder="Enter Heroin name" name="heroin" value={heroin} onChange={this.onChange}/>
       
    </Form.Group>  

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Hero:</Form.Label>
      <Form.Control type="text" placeholder="Enter Hero Name:" name="hero" value={hero} onChange={this.onChange}/>
       
    </Form.Group>  


    <Form.Group controlId="formBasicEmail">
      <Form.Label>Movie Running Time:</Form.Label>
      <Form.Control type="text" placeholder="Enter MovieRunningTime" name="movieRunningTime" value={movieRunningTime} onChange={this.onChange}/>
       
    </Form.Group>  

    <Form.Group controlId="formBasicEmail">
      <Form.Label>Director :</Form.Label>
      <Form.Control type="text" placeholder="Enter director name" name="director" value={director} onChange={this.onChange}/>
       
    </Form.Group>  
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Genre :</Form.Label>
      <Form.Control type="text" placeholder="Enter Genre" name="genre" value={genre} onChange={this.onChange}/>
       
    </Form.Group>  
    <Button variant="dark" type="submit">Save Movie</Button>
      </Form>
      </Container>
    );
    }
}


export default Savemovie;