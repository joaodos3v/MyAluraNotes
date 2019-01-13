public class CriaConta {
	public static void main(String[] args) {
		// Instancia um Objeto do tipo Conta;
		Conta primeiraConta = new Conta();
		primeiraConta.saldo = 200;
		System.out.println(primeiraConta.saldo);
		
		primeiraConta.saldo += 100;
		System.out.println(primeiraConta.saldo);
		
		Conta segundaConta = new Conta();
		segundaConta.saldo = 50;
		
		System.out.println("Primeira conta (saldo): " + primeiraConta.saldo);
		System.out.println("Segunda conta (saldo): " + segundaConta.saldo);
		
		System.out.println("Primeira conta (agencia): " + primeiraConta.agencia);
		System.out.println("Primeira conta (numero): " + primeiraConta.numero);
		
		System.out.println("Segunda conta (agencia): " + segundaConta.agencia);
		System.out.println("Segunda conta (numero): " + segundaConta.numero);
		
		segundaConta.agencia = 146;
		System.out.println("Agora a segunda conta está na agência " + segundaConta.agencia);
		
		System.out.println(primeiraConta);
		System.out.println(segundaConta);
		
		if (primeiraConta == segundaConta) {
			System.out.println("São a mesma conta.");
		} else {
			System.out.println("São contas diferentes.");
		}
	}
}