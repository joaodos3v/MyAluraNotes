public class TesteFuncionario {
	public static void main(String[] args) {
		
		Cliente cliente = new Cliente();
		
		Funcionario funcionario = new Gerente();
		
		funcionario.setNome("Guilherme Brunetto Dall Bello");
		funcionario.setCpf("123.456.789-10");
		funcionario.setSalario(2600.00);
		
		System.out.println(funcionario.getNome());
		System.out.println(funcionario.getBonificacao());
		
		//funcionario.salario = 300;

	}
}