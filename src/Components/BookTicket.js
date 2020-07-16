import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {Form,Button,Container,Row,Col} from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import ShowTicketsBooked from './showTicketSold';
import {Alert} from 'react-bootstrap'

class ShowAlert extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        if(this.props.isBooked)
        {

return <Alert variant="success">Your ticket is booked</Alert>
        }
        else if(this.props.isBooked===false)
        {
        return  <Alert variant="danger">Your ticke is not booked</Alert>
        } 
        else
        {

            return  <Alert variant="light"></Alert>

        }

        
    }
}


class BookTicket extends React.Component{
    constructor()
    {
        super();
        this.state={
         seatNo:'',
         email:'',
         name:'',
         isBooked:''
        };
        }


        onChange=(e)=>
        {
            const state=this.state;
             state[e.target.name]=e.target.value;
             this.setState(state);
        }

        onSubmit=(e)=>
        {
            e.preventDefault();
            const{name,seatNo,email}=this.state;
            //console.log(this.params)
            console.log(name + seatNo + email)
            axios.post('http://localhost:8080/bookticket/'+this.props.match.params.id+'/'+seatNo
            +'/'+email+'/'+name)
            .then((result) => {
                if(result.status===200)
                {
                 
                    this.setState({
                        isBooked:true
                    });
                    console.log(this.state.isBooked);
                }
                else if(result.status===500)
                {
                    this.setState({
                        isBooked:false
                    });
                }
                else
                {
                    
                }
              

        });
         
    }
    render()
    {
        const {name,seatNo,email}=this.state;
        return(
<Container fluid >

           <NavigationBar/>
            <Row>
            
    <Col xs lg="3"><ShowTicketsBooked id={this.props.match.params.id}/></Col>
    <Col xs lg="7">
    <h3 style={{paddingTop:25}}>Book Ticket:</h3>
    <Form style={{paddingTop:10}} onSubmit={this.onSubmit} className="mt-1">
    <Form.Group controlId="formBasicEmail">
      <Form.Label aria-setsize="20">Name:</Form.Label>
      <Form.Control type="name" placeholder="Enter name" name="name" value={name} onChange={this.onChange}/>
       
    </Form.Group>  
    
      <Form.Group controlId="formBasicEmail">
      <Form.Label>Email:</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.onChange}/>
       
    </Form.Group>  

    
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Seat No:</Form.Label>
      <Form.Control type="number" placeholder="Enter SeaT No" name="seatNo" value={seatNo} onChange={this.onChange}/>
      </Form.Group>  
    <Button variant="primary" type="submit">Book Ticket</Button>
      </Form>
      

            
</Col>
<Col  >
         <ShowAlert  isBooked={this.state.isBooked}/>
      </Col>


  </Row>
 
             
            
             

      </Container>
        );
    }

}

export default BookTicket;