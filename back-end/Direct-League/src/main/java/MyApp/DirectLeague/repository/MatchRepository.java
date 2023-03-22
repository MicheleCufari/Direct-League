package MyApp.DirectLeague.repository;

import MyApp.DirectLeague.DTO.ClassificationDTO;
import MyApp.DirectLeague.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface MatchRepository extends JpaRepository<Match,Integer> {

}
