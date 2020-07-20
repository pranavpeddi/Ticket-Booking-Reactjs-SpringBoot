import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




class MatTABLE extends React.Component {
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
  return (
    <TableContainer component={Paper}>
      <Table className={useStyles} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Movie Name</TableCell>
            <TableCell align="right">Movie Running Time </TableCell>
            <TableCell align="right">Hero</TableCell>
            <TableCell align="right">Heroin</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Genre</TableCell>
            <TableCell align="right">Book Ticket</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.movies.map((movie) => (
           <TableRow>
              
              <TableCell align="right">{movie.movie_name}</TableCell>
              <TableCell align="right">{movie.movie_running_time}</TableCell>
              <TableCell align="right">{movie.hero}</TableCell>
              <TableCell align="right">{movie.heroin}</TableCell>
              <TableCell align="right">{movie.director}</TableCell>
              <TableCell align="right">{movie.genre}</TableCell>
              <TableCell align="right"><Link to={`/bookTicket/${movie. m_id}`}>Click to book</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
          }
}

export default MatTABLE;