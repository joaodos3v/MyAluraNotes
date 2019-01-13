public class TestaEscopo {
	public static void main(String[] args) {
		System.out.println("Testando condicionais");
		int idade = 16;
		int quantidadePessoas = 3;
		
		//boolean acompanhado = quantidadePessoas >= 2;

		boolean acompanhado;
		
		if (quantidadePessoas >= 2) {
			acompanhado = true;
		} else {
			acompanhado = false;
		}
		
		if (idade >= 18 || acompanhado) {
			System.out.println("Seja Bem-Vindo!");
		} else {
			System.out.println("Você não pode entrar.");
		}
	}
}