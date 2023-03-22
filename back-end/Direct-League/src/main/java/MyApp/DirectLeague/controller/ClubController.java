package MyApp.DirectLeague.controller;


import MyApp.DirectLeague.entity.Club;
import MyApp.DirectLeague.entity.Player;
import MyApp.DirectLeague.repository.ClubRepository;
import jakarta.validation.Valid;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clubs")
@CrossOrigin
public class ClubController {

    @Autowired
    private ClubRepository clubRepository;


    @GetMapping
    public List<Club> getAll (@RequestParam(name = "search" , required = false) String s){
        if (Strings.isBlank(s)){
            return clubRepository.findAll();
        } else{
            return clubRepository.findByNameContainingIgnoreCase(s);
        }

    }


    @GetMapping("/{id}")
    public Club getById (@PathVariable Integer id){
        Optional<Club> result = clubRepository.findById(id);
        if (result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }



    @PostMapping
    public Club create (@Valid @RequestBody Club club){
        Optional<Club> result = clubRepository.findById(club.getId());
        if (result.isEmpty()){
            return clubRepository.save(club);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public Club update(@Valid @RequestBody Club club, @PathVariable Integer id){
        Optional<Club> result = clubRepository.findById(club.getId());
        if (result.isPresent()){
            club.setId(id);
            return clubRepository.save(club);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        Optional<Club> result = clubRepository.findById(id);
        if (result.isPresent()){
            clubRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // controller per i task
    @GetMapping("/{id}/players")
    public List<Player> getClubPlayer(@PathVariable Integer id){
        // verifico che il club esiste
        Optional<Club> result = clubRepository.findById(id);
        if (result.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "club with id " + id + " not found");
        } else {
            // restituisco solo i player di quel club
            Club club = result.get();
            // restituisco i task dell'utente
            return club.getPlayers(); // questo meglio

        }
    }

}

