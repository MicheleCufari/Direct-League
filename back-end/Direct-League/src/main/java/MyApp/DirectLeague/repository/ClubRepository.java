package MyApp.DirectLeague.repository;

import MyApp.DirectLeague.entity.Club;
import MyApp.DirectLeague.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClubRepository extends JpaRepository<Club,Integer> {

    List<Club> findByNameContainingIgnoreCase (String search);
}
