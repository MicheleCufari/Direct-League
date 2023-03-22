package MyApp.DirectLeague.controller;

import MyApp.DirectLeague.entity.Club;
import MyApp.DirectLeague.entity.Player;
import MyApp.DirectLeague.repository.PlayerRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/players")
@CrossOrigin
public class PlayerController {

    @Autowired
    private PlayerRepository playerRepository;


    @GetMapping
    public List<Player> getAll (){

        return playerRepository.findAll();
    }


    @GetMapping("/{id}")
    public Player getById (@PathVariable Integer id){
        Optional<Player> result = playerRepository.findById(id);
        if (result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }



    @PostMapping
    public Player create (@Valid @RequestBody Player player){
        Optional<Player> result = playerRepository.findById(player.getId());
        if (result.isEmpty()){
            return playerRepository.save(player);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public Player update(@Valid @RequestBody Player player, @PathVariable Integer id){
        Optional<Player> result = playerRepository.findById(player.getId());
        if (result.isPresent()){
            player.setId(id);
            return playerRepository.save(player);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        Optional<Player> result = playerRepository.findById(id);
        if (result.isPresent()){
            playerRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    // controller per i task
    @GetMapping("/{id}/club")
    public Club getPlayerClub(@PathVariable Integer id){
        // verifico che il club esiste
        Optional<Player> result = playerRepository.findById(id);
        if (result.isEmpty()){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "club with id " + id + " not found");
        } else {
            // restituisco solo i player di quel club
            Player player = result.get();
            // restituisco i task dell'utente
            return player.getClub(); // questo meglio

        }
    }

}
