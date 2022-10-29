import React, { Component } from 'react'

export class ChangeName extends Component {
  constructor(props) {
    super(props)
    this.state = { newNameText: '' }
  }
  updateNewTextValue = (event) => {
    this.setState({ newNameText: event.target.value })
  }
  changeName = () => {
    this.props.callback(this.state.newNameText)
    this.setState({ newNameText: '' })
  }
  render = () => (
    <div className="row justify-content-center mb-4">
      <div className="col-12">
        <div className="input-group">
          <input
            className="form-control"
            value={this.state.newNameText}
            onChange={this.updateNewTextValue}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.changeName}>
              Alterar Nome
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
