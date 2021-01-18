import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import { FormularioIngresoVehiculo } from './FormularioIngresoVehiculo.js'
import { MapaInicio } from './MapaInicio.js'

export class IngresoVehiculo extends Component{
  constructor(){
    super()
    this.state = {
      documento: ''
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
      <div className = "tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <FormularioIngresoVehiculo />
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <MapaInicio />
          </article>
        </div>
      </div>
    )
  }
}
