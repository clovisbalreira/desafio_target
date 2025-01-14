//5) Escreva um programa que inverta os caracteres de um string.
//IMPORTANTE:
//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

public class InverterString {
    public static void main(String[] args) {
        // Defina a string que deseja inverter
        String stringOriginal = "Exemplo de string";
        String stringInvertida = inverterString(stringOriginal);
        System.out.println("String original: " + stringOriginal);
        System.out.println("String invertida: " + stringInvertida);
    }

    public static String inverterString(String s) {
        String stringInvertida = "";
        for (int i = 0; i < s.length(); i++) {
            stringInvertida = s.charAt(i) + stringInvertida;
        }
        return stringInvertida;
    }
}
