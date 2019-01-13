public class TesteReferencias {
	public static void main(String[] args) {
		// Cria uma referência para a Classe Conta;
		Conta primeiraConta = new Conta();
		primeiraConta.saldo = 300;
		System.out.println("Saldo da primeira: " + primeiraConta.saldo);

		// Atribui a referência da primeiraConta à segundaConta;
		Conta segundaConta = primeiraConta;
		System.out.println("Saldo da segunda: " + segundaConta.saldo);

		segundaConta.saldo += 100;
		System.out.println("Saldo da segunda: " + segundaConta.saldo);
		System.out.println("Saldo da primeira: " + primeiraConta.saldo);

		System.out.println(primeiraConta);
		System.out.println(segundaConta);

		if (primeiraConta == segundaConta) {
			System.out.println("São a mesma conta.");
		} else {
			System.out.println("São contas diferentes.");
		}
	}
}