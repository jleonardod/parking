import React, { Component } from 'react'
import { Administradores } from '../controller/Administradores'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export class FormRegistro extends Component{

  constructor(props) {
    super(props);
    this.ingresarAdministrador = this.ingresarAdministrador.bind(this);
    this.buscarAdministrador = this.buscarAdministrador.bind(this);
    this.state = {
      active: false,
      busquedaAdmin: false,
      documento: '',
      id: '',
      nombre: undefined,
      apellido: undefined,
      telefono: undefined,
      email: undefined,
      valButton: 'Registrate',
      disabled: true,
      disabledButton: true,
      token: ''
    }
  }

  _handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    });
  }

  async ingresarAdministrador(e){
    e.preventDefault()
    if(this.state.token === ''){
      try{
        const {active, documento, nombre, apellido, telefono, email} = this.state
        const obj1 = JSON.stringify({documento: documento, nombre:nombre, apellido:apellido, telefono:telefono, email:email, active:active})
        const config = {method:'post',
                        url: 'http://127.0.0.1:8000/api/administrador',
                        headers:{'Content-Type': 'application/json'},
                        data: obj1
                       }
        axios(config)
        .then(function(response) {
          const admins = response.data
          this.setState({busquedaAdmin: false})
          if(admins.length > 0){
            const administrador = admins[0]
            this.setState({token: administrador['token']})
            window.location.href = "http://localhost:3000/AdmonParking?id="+this.state.id+"&token="+this.state.token
          }
        })
        .catch(function(error){
          console.log(error);
        })
      }catch(error){
        console.error();
      }
    }else{
      window.location.href = "http://localhost:3000/AdmonParking?id="+this.state.id+"&token="+this.state.token
    }

  }

  async buscarAdministrador (e){
    e.preventDefault();
    this.setState({busquedaAdmin: true})
    try{
      const {documento} = this.state
      const obj1 = JSON.stringify({documento:documento})
      const config = {method:'post',
                      url: 'http://127.0.0.1:8000/api/administrador/search',
                      headers:{'Content-Type': 'application/json'},
                      data: obj1
                     }
      axios(config)
      .then((response) => {
        const admins = response.data
        this.setState({busquedaAdmin: false})
        if(admins.length > 0){
          const administrador = admins[0]
          this.setState({nombre: administrador['nombre']})
          this.setState({apellido: administrador['apellido']})
          this.setState({telefono: administrador['telefono']})
          this.setState({email: administrador['email']})
          this.setState({valButton: 'Ingresa'})
          this.setState({disabledButton: false})
          this.setState({disabled: true})
          this.setState({token: administrador['token']})
        }else{
          this.setState({disabled: false})
          this.setState({disabledButton: false})
          this.setState({valButton: 'Registrate'})
        }
      })
      .catch(function(error){
        console.log(error);
      })
    }catch(error){
      console.error();
    }

  }

  render(){
    return(
      <div>
        <form onSubmit={this.ingresarAdministrador}>
          <p className="title">Registrate</p>
          <p>Para que puedas empezar a administrar el parqueadero es necesario que nos suministres los siguientes datos</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <div className="container is-fluid">
            <div className="field has-addons">
              <div className="control has-icons-left is-expanded">
                <input autoComplete="off"
                       autoFocus="yes"
                       className="input is-hovered"
                       name="documento"
                       onChange={this._handleChange}
                       placeholder="Su numero de documento"
                       type="text"/>
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faIdCard} />
                </span>
              </div>
              <div className="control">
                {}
                <button type="submit"
                        className={this.state.busquedaAdmin ? 'button is-primary is-loading' : 'button is-primary'}
                        onClick={this.buscarAdministrador}>Buscar</button>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input autoComplete="off"
                       autoFocus="yes"
                       className="input is-hovered"
                       disabled={this.state.disabled}
                       name="nombre"
                       onChange={this._handleChange}
                       placeholder="Su nombre"
                       value={this.state.nombre || ''}/>
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
                <input autoComplete="off"
                       className="input is-hovered"
                       disabled={this.state.disabled}
                       name="apellido"
                       onChange={this._handleChange}
                       placeholder="Su Apellido"
                       value={this.state.apellido || ''}/>
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left has-icons-right">
              <input autoComplete="off"
                     className="input is-hovered"
                     disabled={this.state.disabled}
                     name="telefono"
                     onChange={this._handleChange}
                     placeholder="Su numero de telefono"
                     value={this.state.telefono || ''}/>
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faPhoneSquareAlt} />
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control has-icons-left has-icons-right" id="pass2">
                <input autoComplete="off"
                       className="input is-hovered"
                       disabled={this.state.disabled}
                       id="email"
                       name="email"
                       onChange={this._handleChange}
                       placeholder="Su Email"
                       type="text"
                       value={this.state.email || ''}/>
                <span className="icon is-small is-left">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>

              </div>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <button className="button is-dark" disabled={this.state.disabledButton}>{this.state.valButton}</button>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </form>
      </div>
    )
  }
}
