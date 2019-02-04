import React, {Component} from 'react';
import Resultado from './Resultado';

class Resumen extends Component {

	mostrarDatos = () => {

		const {marca, tipoPlan, year} = this.props.datos;

		if(!marca || !tipoPlan || !year) return null;

		return (
			<div className="resumen">
				<h2>Resumen de cotización</h2>
				<li><label>Marca: </label>{ marca }</li>
				<li><label>Plan: </label>{ tipoPlan }</li>
				<li><label>año: </label>{ year }</li>
			</div>
		)
	}

	render(){
		return(
			<div className="capitalize">
				{ this.mostrarDatos() }

				<Resultado
      		 resultado = { this.props.resultado }
      		/>
			</div>
		)
	}
}

export default Resumen;