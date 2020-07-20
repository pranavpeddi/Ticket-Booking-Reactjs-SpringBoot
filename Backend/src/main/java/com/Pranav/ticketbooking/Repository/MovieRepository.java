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

    Movie findById(long id);

    @Query(value = "select   m_id,movie_name, movie_running_time,hero,heroin,director,genre from Movie ",nativeQuery = true)
    List<Map<String,Object>> getMovieRunning();
}


