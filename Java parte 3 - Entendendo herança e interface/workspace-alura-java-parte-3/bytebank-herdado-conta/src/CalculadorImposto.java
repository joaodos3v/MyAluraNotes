public class CalculadorImposto {
	
	private double imposto;
	private double totalImposto;
	
	public double getTotalImposto() {
		return this.totalImposto;
	}
	
	public void registra(Tributavel t) {
		double valor = t.getValorImposto();
		this.totalImposto += valor;
	}
}