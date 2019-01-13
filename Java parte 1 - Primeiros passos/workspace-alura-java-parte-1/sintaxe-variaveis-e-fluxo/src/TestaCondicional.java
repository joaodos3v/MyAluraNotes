public class TestaCondicional {
	public static void main(String[] args) {
		System.out.println("Testando condicionais");
		int idade = 21;
		int quantidadePessoas = 3;

		if (idade >= 18) {
			System.out.println("Você tem mais de 18 anos.");
			System.out.println("Seja Bem-Vindo!");
		} else {
			if (quantidadePessoas >= 2) {
				System.out.println("Você tem menos de 18 anos, mas pode entrar, pois está acompanhado.");
			} else {
				System.out.println("Você tem menos de 18 anos.");
			}
		}
	}
}