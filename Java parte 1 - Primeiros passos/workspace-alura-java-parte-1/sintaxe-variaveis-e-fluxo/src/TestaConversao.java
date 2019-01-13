public class TestaConversao {
	public static void main(String[] args) {
		double salario = 1270.50;
		int valor = (int) salario;
		System.out.println(valor);
		
		long valorLongo = 123123123123123L;
		short valorCurto = 12312;
		byte valorByte = 127;
		
		// Curiosidade:
		double valor1 = 0.1;
		double valor2 = 0.2;
		double total = valor1 + valor2;
		System.out.println(total);
	}
}