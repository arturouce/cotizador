import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import {obtenerDiferenciaAnio, obtenerPlan, calcularMarca} from '../helper/cotizadorHelper';
import Resumen from './Resumen';

class App extends Component {

	state = {
		resultado: '',
		datos: {}
	}

	cotizarSeguro = (datos) => {

		const {marca, tipoPlan , year} = datos;

		let resultado = 2000;

		const diferenciaAnio = obtenerDiferenciaAnio(year);

		const obtenerMarca = calcularMarca(marca);

		const calcularPlan = obtenerPlan(tipoPlan);

		resultado = (resultado - (resultado * (diferenciaAnio * 0.03))) * obtenerMarca;

		resultado = parseFloat(resultado * calcularPlan).toFixed(2);

		this.setState({
			resultado: resultado,
			datos: {
				marca: marca,
				tipoPlan: tipoPlan,
				year: year
			}
		})
		
	}

  render() {
    return (
      <div className="contenedor">
      	<Header
      	 titulo = "Cotizador de Autos" 
      	/>
      	
      	<div className="contenedor-formulario">
      		<Formulario
      		 cotizarSeguro = {this.cotizarSeguro}
      		/>

      		<Resumen
      		 datos = {this.state.datos}
      		 resultado = {this.state.resultado}
      		/>

      	</div>

      </div>
    );
  }
}

export default App;
