package com.Pranav.ticketbooking.Repository;

import com.Pranav.ticketbooking.Model.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface MovieRepository extends CrudRepository<Movie,Long> {

    Movie  findByMovieName(String name);

    @Query(value = "select  movie_name, movie_running_time from Movie ",nativeQuery = true)
    List<Map<String,Object>> getMovieRunning();
}

