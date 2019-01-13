public class ControleBonificacao {
	
	private double soma;
	
	public double getSoma() {
		return soma;
	}
	
	public void registra(Funcionario f) {
		System.out.println("Chamando " + f);
		double boni = f.getBonificacao();
		this.soma += boni;
	}
}