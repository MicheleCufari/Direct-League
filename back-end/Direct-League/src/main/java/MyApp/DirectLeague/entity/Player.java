package MyApp.DirectLeague.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String firstName;

    private String lastName;

    private String nationality;

    private int age;

    private LocalDate dateOfBirth;

    private String position;

    private String urlImg;

    private int shirtNumber;

    private String logo;

    private String history;



    @ManyToOne
    @JoinColumn(name = "club_id")
    @JsonIgnore
    private Club club;

    public Player() {
    }


    public Player(int id, String firstName, String lastName, String nationality, int age, LocalDate dateOfBirth, String position, String urlImg, int shirtNumber, String logo, String history, Club club) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationality = nationality;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.position = position;
        this.urlImg = urlImg;
        this.shirtNumber = shirtNumber;
        this.logo = logo;
        this.history = history;
        this.club = club;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    public int getShirtNumber() {
        return shirtNumber;
    }

    public void setShirtNumber(int shirtNumber) {
        this.shirtNumber = shirtNumber;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getHistory() {
        return history;
    }

    public void setHistory(String history) {
        this.history = history;
    }

    public Club getClub() {
        return club;
    }

    public void setClub(Club club) {
        this.club = club;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Player player = (Player) o;

        if (getId() != player.getId()) return false;
        if (getAge() != player.getAge()) return false;
        if (getShirtNumber() != player.getShirtNumber()) return false;
        if (getFirstName() != null ? !getFirstName().equals(player.getFirstName()) : player.getFirstName() != null)
            return false;
        if (getLastName() != null ? !getLastName().equals(player.getLastName()) : player.getLastName() != null)
            return false;
        if (getNationality() != null ? !getNationality().equals(player.getNationality()) : player.getNationality() != null)
            return false;
        if (getDateOfBirth() != null ? !getDateOfBirth().equals(player.getDateOfBirth()) : player.getDateOfBirth() != null)
            return false;
        if (getPosition() != null ? !getPosition().equals(player.getPosition()) : player.getPosition() != null)
            return false;
        if (getUrlImg() != null ? !getUrlImg().equals(player.getUrlImg()) : player.getUrlImg() != null) return false;
        return getClub() != null ? getClub().equals(player.getClub()) : player.getClub() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getFirstName() != null ? getFirstName().hashCode() : 0);
        result = 31 * result + (getLastName() != null ? getLastName().hashCode() : 0);
        result = 31 * result + (getNationality() != null ? getNationality().hashCode() : 0);
        result = 31 * result + getAge();
        result = 31 * result + (getDateOfBirth() != null ? getDateOfBirth().hashCode() : 0);
        result = 31 * result + (getPosition() != null ? getPosition().hashCode() : 0);
        result = 31 * result + (getUrlImg() != null ? getUrlImg().hashCode() : 0);
        result = 31 * result + getShirtNumber();
        result = 31 * result + (getClub() != null ? getClub().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", nationality='" + nationality + '\'' +
                ", age=" + age +
                ", dateOfBirth=" + dateOfBirth +
                ", position='" + position + '\'' +
                ", urlImg='" + urlImg + '\'' +
                ", shirtNumber=" + shirtNumber +
                ", club=" + club +
                '}';
    }
}
