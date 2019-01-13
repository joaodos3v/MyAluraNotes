// EditorVideo é um Funcionário, EditorVideo herda da Classe Funcionario
public class EditorVideo extends Funcionario {

	public double getBonificacao() {
		System.out.println("Chamando o método de Bonificação do Editor de Vídeo.");
		return 150;
	}
}