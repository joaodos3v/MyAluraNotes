public class DesafioMultiplo3 {
	public static void main(String[] args) {
		
		// Opção 1:
		for (int numero = 0; numero <= 100; numero++) {
			if (numero % 3 == 0) {
				System.out.println("O número " + numero + " é divisível por 3!");
			}
		}
		
		// Opção 2:
		for (int numero = 0; numero <= 100; numero += 3) {
			System.out.println("O número " + numero + " é divisível por 3!");
		}
	}
}