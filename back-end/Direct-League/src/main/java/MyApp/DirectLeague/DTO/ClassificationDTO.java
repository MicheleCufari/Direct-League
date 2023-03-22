package MyApp.DirectLeague.DTO;

public class ClassificationDTO {

    private String name;

    private int point;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPoint() {
        return point;
    }

    public void setPoint(int point) {
        this.point = point;
    }

    @Override
    public String toString() {
        return "ClassificationDTO{" +
                "name='" + name + '\'' +
                ", point=" + point +
                '}';
    }
}
