package MyApp.DirectLeague.controller;

import MyApp.DirectLeague.entity.Club;
import MyApp.DirectLeague.entity.Player;
import MyApp.DirectLeague.entity.Subscriber;
import MyApp.DirectLeague.repository.SubscriberRepository;
import jakarta.validation.Valid;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/subscribers")
@CrossOrigin
public class SubscriberController {

    @Autowired
    private SubscriberRepository subscriberRepository;

    @GetMapping
    public List<Subscriber> getAll (@RequestParam(name = "search" , required = false) String s ){
        if (Strings.isBlank(s)){
            return subscriberRepository.findAll();
        } else{
            return subscriberRepository.findByUsernameContainingIgnoreCase(s);

        }

    }


    @GetMapping("/{id}")
    public Subscriber getById (@PathVariable Integer id){
        Optional<Subscriber> result = subscriberRepository.findById(id);
        if (result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }



    @PostMapping
    public Subscriber create (@Valid @RequestBody Subscriber subscriber){
        Optional<Subscriber> result = subscriberRepository.findById(subscriber.getId());
        if (result.isEmpty()){
            return subscriberRepository.save(subscriber);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public Subscriber update(@PathVariable Integer id, @Valid @RequestBody Subscriber subscriber) {
        Optional<Subscriber> result = subscriberRepository.findById(id);
        if (result.isPresent()) {
            // modifico lo user su database
            // restituisco lo user modificato
            Subscriber subscriberToUpdate = result.get();
            subscriberToUpdate.setId(id);
            subscriberToUpdate.setFirstName(subscriber.getFirstName());
            subscriberToUpdate.setLastName(subscriber.getLastName());
            subscriberToUpdate.setUsername(subscriber.getUsername());
            subscriberToUpdate.setPassword(subscriber.getPassword());
            subscriberToUpdate.setDateOfBirth(subscriber.getDateOfBirth());
            subscriberToUpdate.setEmail(subscriber.getEmail());
            subscriberToUpdate.setClubLove(subscriber.getClubLove());
            subscriberToUpdate.setAge(subscriber.getAge());

            return subscriberRepository.save(subscriberToUpdate);
        } else {
            // se non trovo l'utente con quell'id sollevo un'eccezione che ritorna HTTP 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


    

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        Optional<Subscriber> result = subscriberRepository.findById(id);
        if (result.isPresent()){
            subscriberRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
