public class TestaMetodo {
	public static void main(String[] args) {
		Conta conta = new Conta();
		boolean conseguiuRetirar;
		boolean conseguiuTransferir;
		
		conta.saldo = 100;
		System.out.println(conta.saldo);
		conta.deposita(50);
		System.out.println(conta.saldo);
		conseguiuRetirar = conta.saca(100);
		System.out.println(conta.saldo);
		System.out.println(conseguiuRetirar);
		conseguiuRetirar = conta.saca(100);
		System.out.println(conta.saldo);
		System.out.println(conseguiuRetirar);
		
		Conta conta2 = new Conta();
		conta2.deposita(1000);
		
		conseguiuTransferir = conta2.transfere(300, conta);
		if (conseguiuTransferir) {
			System.out.println("Transferência efetuada!");
		} else {
			System.out.println("Transferência falhou!");
		}
		System.out.println(conta2.saldo);
		System.out.println(conta.saldo);

		System.out.println(conta.titular);
		conta.titular = "Guilherme Brunetto Dall Bello";
		System.out.println(conta.titular);
	}
}