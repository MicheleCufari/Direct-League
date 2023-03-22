package MyApp.DirectLeague.repository;

import MyApp.DirectLeague.entity.News;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsRepository extends JpaRepository<News,Integer> {
}
