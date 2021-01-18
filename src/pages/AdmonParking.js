import React, { Component } from 'react'
import { MapaParking } from '../components/MapaParking.js'
import { MenuPpal } from '../components/MenuPpal.js'
import axios from 'axios'

export class AdmonParking extends Component{

  render(){
    return(
      <div className="has-background-grey">
        <h3 className = "title is-1 has-text-white">Parking Bellpi</h3>
        <p className = "subtitle is-6 has-text-light">Powered by Leonardo Diaz</p>
        <div className = "container is-fluid">
          <div className = "tile is-ancestor">
            <div className="tile is-parent">
              <MenuPpal />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
