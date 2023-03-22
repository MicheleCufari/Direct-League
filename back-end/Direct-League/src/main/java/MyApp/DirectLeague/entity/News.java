package MyApp.DirectLeague.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    private String title;

    @NotBlank
    private String description;

    @NotBlank
    private String titleEng;

    @NotBlank
    private String descriptionEng;

    @NotBlank
    private String urlImg;

    public News() {
    }

    public News(int id, String title, String description, String titleEng, String descriptionEng, String urlImg) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.titleEng = titleEng;
        this.descriptionEng = descriptionEng;
        this.urlImg = urlImg;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitleEng() {
        return titleEng;
    }

    public void setTitleEng(String titleEng) {
        this.titleEng = titleEng;
    }

    public String getDescriptionEng() {
        return descriptionEng;
    }

    public void setDescriptionEng(String descriptionEng) {
        this.descriptionEng = descriptionEng;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrlImg() {
        return urlImg;
    }

    public void setUrlImg(String urlImg) {
        this.urlImg = urlImg;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        News news = (News) o;

        if (getId() != news.getId()) return false;
        if (getTitle() != null ? !getTitle().equals(news.getTitle()) : news.getTitle() != null) return false;
        if (getDescription() != null ? !getDescription().equals(news.getDescription()) : news.getDescription() != null)
            return false;
        return getUrlImg() != null ? getUrlImg().equals(news.getUrlImg()) : news.getUrlImg() == null;
    }

    @Override
    public int hashCode() {
        int result = getId();
        result = 31 * result + (getTitle() != null ? getTitle().hashCode() : 0);
        result = 31 * result + (getDescription() != null ? getDescription().hashCode() : 0);
        result = 31 * result + (getUrlImg() != null ? getUrlImg().hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "News{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", urlImg='" + urlImg + '\'' +
                '}';
    }
}
