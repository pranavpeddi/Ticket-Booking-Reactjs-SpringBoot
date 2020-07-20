package com.Pranav.ticketbooking.Controller;

import com.Pranav.ticketbooking.Model.Customer;
import com.Pranav.ticketbooking.Model.Movie;


import com.Pranav.ticketbooking.Service.NewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.Pranav.ticketbooking.Service.BookingService;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
public class BookingController {



   @Autowired
    NewService newService;






    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/saveMovie")
    public ResponseEntity<String> saveMovie(@RequestBody Movie movie)
    {
          newService.saveMovie(movie);
          return  new ResponseEntity<String>("movie is added", HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/bookticket/{mid}/{seatNo}/{email}/{name}")
    public ResponseEntity<String> bookTicket(@PathVariable long mid,@PathVariable int seatNo,
                                             @PathVariable  String email,@PathVariable String name)
    {
        Optional<Movie> checkMovie= Optional.ofNullable(newService.findMovie((mid)));
       if(!checkMovie.isPresent())
       {
           return new ResponseEntity<>("movie is not available at this time",HttpStatus.BAD_REQUEST);
       }

       else {
         if(!newService.checkIfBooked(seatNo))
         {
            return new ResponseEntity<>("seat no u choose is already booked,please choose another",HttpStatus.BAD_REQUEST);
         }
         if(newService.ticketsBookedinNo(mid)>20)
           {

               return new ResponseEntity<>("sorry its HouseFull",HttpStatus.BAD_REQUEST);
           }

         newService.bookTicket(mid,seatNo, name, email);
           return new ResponseEntity<String>("ticket is Booked", HttpStatus.OK);

       }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/tickets/cancelTicket/{name}")
    public ResponseEntity<String> cancelTicket(@RequestParam String name)
    {
       Optional<Customer> checkCustomer= Optional.ofNullable(newService.findCustomer(name));
       if(checkCustomer.isPresent())
       {
            newService.cancelTicket(name);
             return new ResponseEntity<String>("ticket is cancelled",HttpStatus.OK);
       }
       else
       {
           return new ResponseEntity<String>("ticket is never booked", HttpStatus.BAD_REQUEST);
       }

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/movie/getTickets/{id}")
    @ResponseBody
    public List<Map<String, Object>> getTicketsofMovie(@PathVariable long id)
    {
        return newService.getMovieSeatNos(id);
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/movie/getMovies")
    @ResponseBody
    public List<Map<String, Object>> getMovieAllalua()
    {
       return newService.getMovieS();
    }

}
