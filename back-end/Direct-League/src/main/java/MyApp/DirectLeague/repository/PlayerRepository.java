package MyApp.DirectLeague.repository;

import MyApp.DirectLeague.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player,Integer> {
}
