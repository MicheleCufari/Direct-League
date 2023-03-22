package MyApp.DirectLeague.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "matches")
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String day;


    @ManyToOne
    @JoinColumn(name = "home_club")

    private Club homeClub;

    @ManyToOne
    @JoinColumn(name = "away_club")

    private Club awayClub;

    private String result;

    private int goalHomeClub;

    private int goalAwayClub;

    public int getGoalHomeClub() {
        return goalHomeClub;
    }

    public void setGoalHomeClub(int goalHomeClub) {
        this.goalHomeClub = goalHomeClub;
    }

    public int getGoalAwayClub() {
        return goalAwayClub;
    }

    public void setGoalAwayClub(int goalAwayClub) {
        this.goalAwayClub = goalAwayClub;
    }

    public Match() {
    }

    public Match(int id, String day, Club homeClub, Club awayClub, String result) {
        this.id = id;
        this.day = day;
        this.homeClub = homeClub;
        this.awayClub = awayClub;
        this.result = result;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public Club getHomeClub() {
        return homeClub;
    }

    public void setHomeClub(Club homeClub) {
        this.homeClub = homeClub;
    }

    public Club getAwayClub() {
        return awayClub;
    }

    public void setAwayClub(Club awayClub) {
        this.awayClub = awayClub;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }



    @Override
    public String toString() {
        return "Match{" +
                "id=" + id +
                ", day='" + day + '\'' +
                ", homeClub=" + homeClub +
                ", awayClub=" + awayClub +
                ", result='" + result + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Match match = (Match) o;

        if (getId() != match.getId()) return false;
        if (getDay() != null ? !getDay().equals(match.getDay()) : match.getDay() != null) return false;
        if (getHomeClub() != null ? !getHomeClub().equals(match.getHomeClub()) : match.getHomeClub() != null)
            return false;
        if (getAwayClub() != null ? !getAwayClub().equals(match.getAwayClub()) : match.getAwayClub() != null)
            return false;
        return getResult() != null ? getResult().equals(match.getResult()) : match.getResult() == null;
    }

    @Override
    public int hashCode() {
        int result1 = getId();
        result1 = 31 * result1 + (getDay() != null ? getDay().hashCode() : 0);
        result1 = 31 * result1 + (getHomeClub() != null ? getHomeClub().hashCode() : 0);
        result1 = 31 * result1 + (getAwayClub() != null ? getAwayClub().hashCode() : 0);
        result1 = 31 * result1 + (getResult() != null ? getResult().hashCode() : 0);
        return result1;
    }
}
