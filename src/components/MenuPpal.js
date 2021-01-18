import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { IngresoVehiculo } from './IngresoVehiculo'

export class MenuPpal extends Component{
  render(){
    return(
      <div className="tile is-parent">
        <article className="tile is-child box">
          <div className="field">
            <div className="tabs is-centered">
              <ul>
                <li className="is-active">
                  <a onClick={this.activarIngreso}>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faArrowDown} />
                      <i className="fas fa-image" aria-hidden="true"></i>
                    </span>
                    <span>Ingreso</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faArrowUp} />
                    </span>
                    <span>Salida</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faDollarSign} />
                    </span>
                    <span>Tarifas</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="icon is-small">
                      <FontAwesomeIcon icon={faFileAlt} />
                    </span>
                    <span>Informes</span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
          <article className="tile is-child box">
          {
            this.state.ingreso
              ? <IngresoVehiculo />
              : null
          }
          </article>
        </article>
      </div>

    )
  }
}
