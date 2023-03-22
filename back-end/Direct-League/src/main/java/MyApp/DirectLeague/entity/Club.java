package MyApp.DirectLeague.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

import java.util.List;

@Entity
@Table(name = "clubs")
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String lowerName;

    @NotBlank
    private String name;

    @NotBlank
    private String logo;

    @NotBlank
    private String city;

    @NotBlank
    private String country;

    @NotBlank
    private int foundationYear;

    @NotBlank
    private String Stadium;

    @NotBlank
    private String league;

    @NotBlank
    private String manager;

    @NotBlank
    private String slogan;

    @OneToMany(mappedBy = "club" , orphanRemoval = true)
    private List<Player> players;

    @OneToMany(mappedBy = "homeClub",orphanRemoval = true)
    @JsonIgnore
    private List<Match> homeClubMatch;

    @OneToMany(mappedBy = "awayClub",orphanRemoval = true)
    @JsonIgnore
    private List<Match> awayClubMatch;





    public Club() {
    }

    public Club(int id, String lowerName, String name, String logo, String city, String country, int foundationYear, String stadium, String league, String manager, String slogan, List<Player> players, List<Match> homeClubMatch, List<Match> awayClubMatch) {
        this.id = id;
        this.lowerName = lowerName;
        this.name = name;
        this.logo = logo;
        this.city = city;
        this.country = country;
        this.foundationYear = foundationYear;
        Stadium = stadium;
        this.league = league;
        this.manager = manager;
        this.slogan = slogan;
        this.players = players;
        this.homeClubMatch = homeClubMatch;
        this.awayClubMatch = awayClubMatch;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSlogan() {
        return slogan;
    }

    public void setSlogan(String slogan) {
        this.slogan = slogan;
    }

    public String getLowerName() {
        return lowerName;
    }

    public void setLowerName(String lowerName) {
        this.lowerName = lowerName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getFoundationYear() {
        return foundationYear;
    }

    public void setFoundationYear(int foundationYear) {
        this.foundationYear = foundationYear;
    }

    public String getStadium() {
        return Stadium;
    }

    public void setStadium(String stadium) {
        Stadium = stadium;
    }

    public String getLeague() {
        return league;
    }

    public void setLeague(String league) {
        this.league = league;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public List<Match> getHomeClubMatch() {
        return homeClubMatch;
    }

    public void setHomeClubMatch(List<Match> homeClub) {
        this.homeClubMatch = homeClub;
    }

    public List<Match> getAwayClubMatch() {
        return awayClubMatch;
    }

    public void setAwayClubMatch(List<Match> awayClub) {
        this.awayClubMatch = awayClub;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Club club = (Club) o;

        if (getId() != club.getId()) return false;
        if (getFoundationYear() != club.getFoundationYear()) return false;
        if (getName() != null ? !getName().equals(club.getName()) : club.getName() != null) return false;
        if (getLogo() != null ? !getLogo().equals(club.getLogo()) : club.getLogo() != null) return false;
        if (getCity() != null ? !getCity().equals(club.getCity()) : club.getCity() != null) return false;
        if (getCountry() != null ? !getCountry().equals(club.getCountry()) : club.getCountry() != null) return false;
        if (getStadium() != null ? !getStadium().equals(club.getStadium()) : club.getStadium() != null) return false;
        if (getLeague() != null ? !getLeague().equals(club.getLeague()) : club.getLeague() != null) return false;
        if (getManager() != null ? !getManager().equals(club.getManager()) : club.getManager() != null) return false;
        return getPlayers() != null ? getPlayers().equals(club.getPlayers()) : club.getPlayers() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getName() != null ? getName().hashCode() : 0);
        result = 31 * result + (getLogo() != null ? getLogo().hashCode() : 0);
        result = 31 * result + (getCity() != null ? getCity().hashCode() : 0);
        result = 31 * result + (getCountry() != null ? getCountry().hashCode() : 0);
        result = 31 * result + getFoundationYear();
        result = 31 * result + (getStadium() != null ? getStadium().hashCode() : 0);
        result = 31 * result + (getLeague() != null ? getLeague().hashCode() : 0);
        result = 31 * result + (getManager() != null ? getManager().hashCode() : 0);
        result = 31 * result + (getPlayers() != null ? getPlayers().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Club{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", logo='" + logo + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                ", foundationYear=" + foundationYear +
                ", Stadium='" + Stadium + '\'' +
                ", league='" + league + '\'' +
                ", manager='" + manager + '\'' +
                ", players=" + players +
                '}';
    }
}
