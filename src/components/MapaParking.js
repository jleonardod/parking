import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class MapaParking extends Component{
  render(){
    return(
      <div>
        <p className="title">Estado Actual del Parqueadero</p>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tr>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
          </tr>
        </table>
        <p>&nbsp;</p>
        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tr>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
            </tr>
            <tr>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
              <td>M</td>
            </tr>
          </table>
        </div>
        <p>&nbsp;</p>
        <div className="table-container">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tr>
              <td>B</td>
              <td>B</td>
              <td>B</td>
              <td>B</td>
              <td>B</td>
              <td>B</td>
              <td>B</td>
              <td>B</td>
              <td>B</td>
              <td>B</td>
            </tr>
          </table>
        </div>
        <p>&nbsp;</p>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <tr>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
            <td>A</td>
          </tr>
        </table>
      </div>
    )
  }
}
