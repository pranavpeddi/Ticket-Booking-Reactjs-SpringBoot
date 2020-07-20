import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Table,Container,Button,Row,Col} from 'react-bootstrap'
import NavigationBar from "./NavigationBar"
import RatingChart from './RatingChart'


class ShowMovies extends Component
{
    constructor()
    {
        super();
        this.state={
        movies:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movie/getMovies')
          .then(res => {
            this.setState({ movies: res.data });
            console.log(res.data)
            console.log(this.state.movies);
          });
      }
      

      render()
{
    return(

    <Container  fluid>
     <NavigationBar />
     <Row>
    <Col xs lg="4" >
     <h4>Movies Rating</h4>
     <RatingChart  />
     </Col>

     <Col xs lg="8">
 
           
        <h4>Movies Running Today </h4>
    <Table className="mt-1" variant="dark" striped bordered hover  size="sm"  style={{paddingLeft:100}} > 
    <thead>
        <tr>
            <th>Movie Name</th>
            <th>Movie Running Time </th>
            <th>Hero</th>
            <th>Heroin</th>
            <th>Director</th>
            <th>Genre</th>
            <th>Book Ticket</th>
        </tr>

    </thead>
    <tbody>
                {this.state.movies.map(c =>
                  <tr>
                    <td>{c.movie_name}</td>
                    <td>{c.movie_running_time}</td>
                    <td>{c.hero}</td>
                    <td>{c.heroin}</td>
                    <td>{c.director}</td>
                    <td>{c.genre}</td>
                    <td><Link to={`/bookTicket/${c. m_id}`}><Button variant="primary" type="submit">Click to Book </Button></Link></td>
                  </tr>
                )}
              </tbody>

    </Table>
    </Col>
    </Row>
    </Container>

    );
}
}




export default ShowMovies;