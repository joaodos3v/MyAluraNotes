// Designer é um Funcionário, Designer herda da Classe Funcionario
public class Designer extends Funcionario {

	public double getBonificacao() {
		System.out.println("Chamando o método de Bonificação do Designer.");
		return 200;
	}
}