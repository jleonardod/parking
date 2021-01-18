import React, { Component } from 'react'
import axios from 'axios'

export class Administradores extends Component{
  constructor() {
    super();
    this.ingresarAdministrador = this.ingresarAdministrador.bind(this);
    this.buscarAdministrador = this.buscarAdministrador.bind(this);
    this.state = {
      documento: '',
      nombre: '',
      apellido: '',
      telefono: '',
      email: ''
    }
  }

  _handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]:value
    });
  }

  async ingresarAdministrador(e){
    e.preventDefault();

    try{
      const {nombre, apellido, telefono, email} = this.state
      const obj1 = JSON.stringify({nombre:nombre, apellido:apellido, telefono:telefono, email:email})
      const config = {method:'post',
                      url: 'https://localhost:8000/api/Administradores',
                      headers:{'Content-Type': 'application/json'},
                      data: obj1
                     }
      axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        window.location.href = "http://localhost:3000/AdmonParking"
      })
      .catch(function(error){
        console.log(error);
      })
    }catch(error){
      console.error();
    }
  }

  async buscarAdministrador(e){
    e.preventDefault();
    try{
      const {documento} = this.state
      const obj1 = JSON.stringify({documento:documento})
      const config = {method:'post',
                      url: 'http://127.0.0.1:8000/api/administrador/search',
                      headers:{'Content-Type': 'application/json'},
                      data: obj1
                     }
      axios(config)
      .then(function(response){
        console.log(JSON.stringify(response.data));
      })
      .catch(function(error){
        console.log(error);
      })
    }catch(error){
      console.error();
    }
  }
}
