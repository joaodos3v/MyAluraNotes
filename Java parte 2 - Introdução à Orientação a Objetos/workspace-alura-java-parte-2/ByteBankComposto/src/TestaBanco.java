public class TestaBanco {
	public static void main(String[] args) {
		Cliente cliente = new Cliente();
		
		cliente.nome = "Guilherme Brunetto Dall Bello";
		cliente.cpf = "123.456.789-10";
		cliente.profissao = "Desenvolvedor";
		
		Conta conta = new Conta();
		conta.titular = cliente;
		
		conta.deposita(100);
	}
}