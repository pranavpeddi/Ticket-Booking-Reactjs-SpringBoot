package com.Pranav.ticketbooking.Model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity

public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long mId;
    @Column(unique = true)
    private String movieName;
    private String movieRunningTime;


    @OneToMany(mappedBy = "movie",cascade = {CascadeType.ALL,CascadeType.REMOVE},fetch = FetchType.LAZY)

    private List<Ticket> tickets=new ArrayList<>();

    public long getmId() {
        return mId;
    }

    public void setmId(long mId) {
        this.mId = mId;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

	public String getMovieRunningTime() {
		return movieRunningTime;
	}

	public void setMovieRunningTime(String movieRunningTime) {
		this.movieRunningTime = movieRunningTime;
	}

	public List<Ticket> getTickets() {
		return tickets;
	}

	public void setTickets(List<Ticket> tickets) {
		this.tickets = tickets;
	}

    
    


}
