public class TesteTributaveis {

	public static void main(String[] args) {
		
		ContaCorrente cc = new ContaCorrente(222, 333);
		cc.deposita(100.0);
		
		AcaoBolsa ab = new AcaoBolsa();
		
		SeguroDeVida s = new SeguroDeVida();

		CalculadorImposto ci = new CalculadorImposto();
		
		ci.registra(cc);
		ci.registra(s);
		ci.registra(ab);

		System.out.println(ci.getTotalImposto());
	}
}