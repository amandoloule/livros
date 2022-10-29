import React, { Component } from 'react'

export class BooksHeader extends Component {
  render = () => (
    <div className="bg-primary text-white p-4 mb-4">
      <div className="container">
        <h3>
          <i class="bi bi-bookshelf"></i> Livros de {this.props.name}
        </h3>
        <h5>
          ({this.props.booksToRead.filter((t) => !t.done).length} livros a ler)
        </h5>
      </div>
    </div>
  )
}
