package MyApp.DirectLeague.controller;

import MyApp.DirectLeague.DTO.ClassificationDTO;
import MyApp.DirectLeague.entity.Club;
import MyApp.DirectLeague.entity.Match;
import MyApp.DirectLeague.entity.News;
import MyApp.DirectLeague.repository.ClubRepository;
import MyApp.DirectLeague.repository.NewsRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/news")
@CrossOrigin
public class NewsController {
    @Autowired
    private NewsRepository newsRepository;



    @GetMapping
    public List<News> getAll (){

        return newsRepository.findAll();

    }

    @GetMapping("/{id}")
    public News getById (@PathVariable Integer id){
        Optional<News> result = newsRepository.findById(id);
        if (result.isPresent()){
            return result.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }




    @PostMapping
    public News create (@Valid @RequestBody News news){
        Optional<News> result = newsRepository.findById(news.getId());
        if (result.isEmpty()){
            return newsRepository.save(news);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public News update(@PathVariable Integer id, @Valid @RequestBody News news) {
        Optional<News> result = newsRepository.findById(id);
        if (result.isPresent()) {
            // modifico lo user su database
            // restituisco lo user modificato
            News newsToUpdate = result.get();
            newsToUpdate.setId(id);
            newsToUpdate.setTitle(news.getTitle());
            newsToUpdate.setDescription(news.getDescription());
            newsToUpdate.setUrlImg(news.getUrlImg());

            return newsRepository.save(newsToUpdate);
        } else {
            // se non trovo l'utente con quell'id sollevo un'eccezione che ritorna HTTP 404
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        Optional<News> result = newsRepository.findById(id);
        if (result.isPresent()){
            newsRepository.deleteById(id);
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}
