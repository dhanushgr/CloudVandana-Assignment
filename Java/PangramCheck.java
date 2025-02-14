package Java;

public class PangramCheck {
    public static void main(String[] args) {
        System.out.println(isPangram("The quick brown fox jumps over the lazy dog")); // Example output: true
    }

    public static boolean isPangram(String sentence) {
        boolean[] mark = new boolean[26];
        int index;

        for (int i = 0; i < sentence.length(); i++) {
            char ch = sentence.charAt(i);
            if ('A' <= ch && ch <= 'Z') {
                index = ch - 'A';
            } else if ('a' <= ch && ch <= 'z') {
                index = ch - 'a';
            } else {
                continue;
            }
            mark[index] = true;
        }

        for (boolean b : mark) {
            if (!b) {
                return false;
            }
        }

        return true;
    }
}