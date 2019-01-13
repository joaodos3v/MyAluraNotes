public class TesteGerente {
	public static void main(String[] args) {
		
		Gerente g1 = new Gerente();
		g1.setNome("Guilherme");
		g1.setCpf("123.456.789-10");
		g1.setSalario(3000);
		
		System.out.println(g1.getNome());
		System.out.println(g1.getCpf());
		System.out.println(g1.getSalario());
		
		g1.setSenha(1234);
		boolean autenticou = g1.autentica(1234);
		System.out.println(autenticou);
		
		System.out.println(g1.getBonificacao());
		
		Autenticavel g2 = new Gerente();
	}
}