import React, { Component } from 'react'

export class BooksRow extends Component {
  render = () => (
    <tr key={this.props.item.title}>
      <td>{this.props.item.title}</td>
      <td>
        <input
          type="checkbox"
          checked={this.props.item.done}
          onChange={() => this.props.callback(this.props.item)}
        />
      </td>
    </tr>
  )
}
