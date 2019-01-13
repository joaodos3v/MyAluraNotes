public class TestaGetESet {
	public static void main(String[] args) {
		Conta conta = new Conta(1337, 24226);
		
		System.out.println(conta.getNumero());
		
		Cliente cliente = new Cliente();
		
		//conta.titular = cliente;
		conta.setTitular(cliente);
		//cliente.nome = "Guilherme Brunetto Dall Bello";
		cliente.setNome("Guilherme Brunetto Dall Bello");
		System.out.println(conta.getTitular().getNome());
		
		conta.getTitular().setProfissao("Desenvolvedor");
		
		// Agora em duas linhas:
		Cliente titularDaConta = conta.getTitular();
		titularDaConta.setProfissao("Desenvolvedor");
		
		System.out.println(cliente);
		System.out.println(titularDaConta);
		System.out.println(conta.getTitular());
	}
}