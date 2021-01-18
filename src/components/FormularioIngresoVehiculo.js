import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export class FormularioIngresoVehiculo extends Component{
  constructor(props, context) {
    super(props, context);
    this.buscarPropietario = this.buscarPropietario.bind(this);
    this.state = {
      documento: '',
    }
  }

  async buscarPropietario(e){
    e.preventDefault();
    try{
      const {documento} = this.state
      const obj1 = JSON.stringify({documento:documento})
      const config = {method:'get',
                      url: 'http://localhost:8000/api/Propietarios',
                      headers:{'Content-Type': 'application/json'},
                      data: obj1
                     }
      axios(config)
      .then(function(response) {
        const propietario = JSON.stringify(response.data);
        this.props.onResults(propietario)
      })
      .catch(function(error){
        console.log(error);
      })
    }catch(error){
      console.error();
    }
  }

  _handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    });
  }

  render(){
    return(
      <form onSubmit={this.buscarPropietario}>
        <p className="title">Datos Básicos para ingreso</p>
        <p>Por favor Ingrese la siguiente información</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div className="container is-fluid">
          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input autoComplete="off"
                     className="input is-hovered"
                     name="documento"
                     onChange={this._handleChange}
                     placeholder="Numero de Documento"
                     type="text"/>
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
          <p>&nbsp;</p>
          <button className="button is-dark">Buscar</button>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </form>
    )
  }
}
