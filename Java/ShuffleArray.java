package Java;

public class ShuffleArray {

    public static void main(String[] args) {
        int[] array = { 1, 2, 3, 4, 5, 6, 7 };
        shuffleArray(array);
        for (int i : array) {
            System.out.print(i + " ");
        }
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        for (int i = 0; i < n; i++) {
            int randomIndex = i + (int) (Math.random() * (n - i));
            int temp = array[randomIndex];
            array[randomIndex] = array[i];
            array[i] = temp;
        }
    }
}