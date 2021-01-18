import React, { Component } from 'react'
import { FormRegistro } from '../components/FormRegistro'
import { MapaInicio } from '../components/MapaInicio'


export class Home extends Component{

  constructor(){
    super()
    this.state = {
      ingreso: false
    }
  }

  render(){
    return(
      <div className="has-background-grey">
        <h3 className = "title is-1 has-text-white">Parking Bellpi</h3>
        <p className = "subtitle is-6 has-text-light">Powered by Leonardo Diaz</p>
        <div className = "container is-fluid">
          <div className = "tile is-ancestor">
            <div className="tile is-parent">
              <article className="tile is-child box">
                <MapaInicio />
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <FormRegistro />
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
