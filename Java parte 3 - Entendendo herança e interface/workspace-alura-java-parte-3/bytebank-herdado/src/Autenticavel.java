/*
 * Contrato Autenticavel
 * 	Quem assinar esse contrato, precisa implementar
 * 		método setSenha
 * 		método autentica
 */
public abstract interface Autenticavel {

	public abstract void setSenha(int senha);

	public abstract boolean autentica(int senha);
}