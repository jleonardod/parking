import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

export class MapaInicio extends Component{

  render(){
    return(
      <form onSubmit={this._handleSubmit}>
        <div className="container is-fluid">
          <div className="field">
            <p className="title">Estado Actual</p>
            <p>&nbsp;</p>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
              <tr>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
              </tr>
            </tbody>
            </table>
            <p>&nbsp;</p>
            <div className="table-container">
              <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <tbody>
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
                </tbody>
              </table>
            </div>
            <p>&nbsp;</p>
            <div className="table-container">
              <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <tbody>
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
                </tbody>
              </table>
            </div>
            <p>&nbsp;</p>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
              <tr>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
                <td>A</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    )
  }
}
