import React, { Component } from 'react'

export class BooksCreator extends Component {
  constructor(props) {
    super(props)
    this.state = { newBookText: '' }
  }
  updateNewTextValue = (event) => {
    this.setState({ newBookText: event.target.value })
  }
  addNewBook = () => {
    this.props.callback(this.state.newBookText)
    this.setState({ newBookText: '' })
  }
  render = () => (
    <div className="row justify-content-center mb-4">
      <div className="col-12">
        <div className="input-group">
          <input
            className="form-control"
            value={this.state.newBookText}
            onChange={this.updateNewTextValue}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.addNewBook}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
