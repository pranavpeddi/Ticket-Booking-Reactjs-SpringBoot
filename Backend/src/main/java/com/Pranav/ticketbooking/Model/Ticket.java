package com.Pranav.ticketbooking.Model;


import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Ticket {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Tid;
    @Column(unique = true)
    private int seatNo;
    private LocalDate date;
    private LocalTime time;

    @ManyToOne
    private Movie movie;


    public long getTid() {
        return Tid;
    }

    public void setTid(long tid) {
        Tid = tid;
    }

    public int getSeatNo() {
        return seatNo;
    }

    public void setSeatNo(int seatNo) {
        this.seatNo = seatNo;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }
}
