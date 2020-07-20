import React from 'react';
import Axios from 'axios';
import {Table,Container,Button} from 'react-bootstrap'

class ShowTickets extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            seatsBooked:[],
          
        };

    }


  


    componentDidMount() {
        Axios.get('http://localhost:8080/movie/getTickets/'+this.props.id)
          .then(res => {
            this.setState({ seatsBooked: res.data });
            console.log(res.data.seat_no)
            console.log(this.state.seatsBooked);
          });
      }
  

      render()
      {
          return(
 <Container style={{paddingTop:60}}>

<Table style={{paddingTop:50}} size="50%" className="mt-1" variant="dark" striped bordered hover size="sm">
    <thead>
        <tr>
            <th>Seats which are Booked</th>
           
       
        </tr>

    </thead>
    <tbody>
                {this.state.seatsBooked.map(c =>
                  <tr>
                    <td>{c.seat_no}</td>
                  </tr>
                )}
                

              </tbody>

    </Table>
</Container>
          );
      }

}

export default ShowTickets;