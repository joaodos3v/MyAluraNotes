public class TestaLacos2 {
	public static void main(String[] args) {
		for (int linha = 0; linha < 10; linha++) {
			for (int coluna = 0; coluna <= linha; coluna++) {
				// if (coluna > linha) {
				// break;
				// }
				System.out.print("*");
			}
			System.out.println();
		}
	}
}