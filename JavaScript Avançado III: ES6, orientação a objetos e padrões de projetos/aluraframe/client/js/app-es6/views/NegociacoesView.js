import {View} from './View';

export class NegociacoesView extends View {

	constructor(elemento) {
		super(elemento);
	}

	template(model) {
		return `
			<table class="table table-hover table-bordered">
		        <thead>
		            <tr>
		                <th style="cursor: pointer;" onclick="negociacaoController.ordena('data')">DATA</th>
		                <th style="cursor: pointer;" onclick="negociacaoController.ordena('quantidade')">QUANTIDADE</th>
		                <th style="cursor: pointer;" onclick="negociacaoController.ordena('valor')">VALOR</th>
		                <th style="cursor: pointer;" onclick="negociacaoController.ordena('volume')">VOLUME</th>
		            </tr>
		        </thead>
		        
		        <tbody>
		        	${model.negociacoes.map(n => `
	        			
	        			<tr>
	        				<td>${DateHelper.dataParaTexto(n.data)}</td>
	        				<td>${n.quantidade}</td>
	        				<td>${n.valor}</td>
	        				<td>${n.volume}</td>
	        			</tr>

		        	`).join('')}
		        </tbody>
		        
		        <tfoot>
		        	<td colspan="3"></td>
		        	<td>
			        	${model.volumeTotal}
		        	</td>
		        </tfoot>
		    </table>
		`;
	}


}