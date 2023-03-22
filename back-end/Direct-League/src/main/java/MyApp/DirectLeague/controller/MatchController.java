package MyApp.DirectLeague.controller;

import MyApp.DirectLeague.DTO.ClassificationDTO;
import MyApp.DirectLeague.entity.Club;
import MyApp.DirectLeague.entity.Match;
import MyApp.DirectLeague.entity.Subscriber;
import MyApp.DirectLeague.repository.ClubRepository;
import MyApp.DirectLeague.repository.MatchRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/matches")
@CrossOrigin
public class MatchController {

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private ClubRepository clubRepository;



    @GetMapping
    public List<Match> getAll (){

            return matchRepository.findAll();

    }

    @GetMapping("/{id}")
    public Match getById (@PathVariable Integer id){
        Optional<Match> result = matchRepository.findById(id);
        if (result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping("/class")
    public List<ClassificationDTO> getClassifica (){
        System.out.println("getCLassifica");
        List<Club> clubList = clubRepository.findAll();
        List<ClassificationDTO> listResult = new ArrayList<ClassificationDTO>();
       // for (int i = 0; i < clubList.size(); i++) {
            for (Club club : clubList) {
                List<Match> matches = club.getHomeClubMatch();
                System.out.println(club.getName());
                int punti = 0;
                System.out.println("partite in casa");
                for (Match partita : matches) {
                    System.out.println(partita.getHomeClub().getName());
                    System.out.println(partita.getGoalHomeClub());
                    System.out.println(partita.getAwayClub().getName());
                    System.out.println(partita.getGoalAwayClub());
                    if (partita.getGoalHomeClub() > partita.getGoalAwayClub()) {
                        punti = punti + 3;

                    } else if (partita.getGoalHomeClub() == partita.getGoalAwayClub()) {
                        punti = punti + 1;
                    }
                    System.out.println(punti);
                }
                matches = club.getAwayClubMatch();
                System.out.println("match fuori casa");
                for (Match partita : matches) {
                    System.out.println(partita.getHomeClub().getName());
                    System.out.println(partita.getGoalHomeClub());
                    System.out.println(partita.getAwayClub().getName());
                    System.out.println(partita.getGoalAwayClub());
                    if (partita.getGoalAwayClub() > partita.getGoalHomeClub()) {
                        punti = punti + 3;
                    } else if (partita.getGoalAwayClub() == partita.getGoalHomeClub()) {
                        punti = punti + 1;
                    }
                    System.out.println(punti);
                }
                 ClassificationDTO r = new ClassificationDTO();
                r.setName(club.getName());
                r.setPoint(punti);
                listResult.add(r);
            }
       // }
        System.out.println(listResult);
        return listResult;
    }

    @PostMapping
    public Match create (@Valid @RequestBody Match match){
        Optional<Match> result = matchRepository.findById(match.getId());
        if (result.isEmpty()){
            return matchRepository.save(match);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public Match update(@PathVariable Integer id, @Valid @RequestBody Match match) {
        Optional<Match> result = matchRepository.findById(id);
        if (result.isPresent()) {
            // modifico lo user su database
            // restituisco lo user modificato
            Match matchToUpdate = result.get();
            matchToUpdate.setId(id);
            matchToUpdate.setGoalHomeClub(match.getGoalHomeClub());
            matchToUpdate.setGoalAwayClub(match.getGoalAwayClub());


            return matchRepository.save(matchToUpdate);
        } else {
            // se non trovo l'utente con quell'id sollevo un'eccezione che ritorna HTTP 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        Optional<Match> result = matchRepository.findById(id);
        if (result.isPresent()){
            matchRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}
