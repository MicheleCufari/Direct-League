package MyApp.DirectLeague.repository;

import MyApp.DirectLeague.entity.Club;
import MyApp.DirectLeague.entity.Subscriber;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubscriberRepository extends JpaRepository<Subscriber, Integer> {
    List<Subscriber> findByUsernameContainingIgnoreCase(String search);

    List<Subscriber> findByUsernameAndPassword(String username, String password);

}
