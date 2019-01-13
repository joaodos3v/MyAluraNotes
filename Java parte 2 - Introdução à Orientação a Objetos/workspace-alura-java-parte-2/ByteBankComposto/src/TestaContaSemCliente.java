public class TestaContaSemCliente {
	public static void main(String[] args) {
		Conta conta = new Conta();
		System.out.println(conta);
		System.out.println(conta.titular);
		System.out.println(conta.titular.nome);
		
		conta.titular.nome = "Guilherme Brunetto Dall Bello";
		System.out.println(conta.titular.nome);
	}
}