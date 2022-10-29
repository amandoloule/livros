import React, { Component } from 'react'
//import logo from './logo.svg';
//import './App.css';
import { BooksHeader } from './BooksHeader'
import { BooksCreator } from './BooksCreator'
import { BooksRow } from './BooksRow'
import { VisibilityControl } from './VisibilityControl'
import { ChangeName } from './ChangeName'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'Amando',
      books: [
        { title: 'Brás Cubas', done: false },
        { title: 'Dom Casmurro', done: false },
        { title: 'Cinco Minutos', done: true },
        { title: 'A Viuvinha', done: false },
      ],
      //newBookText: '',
      showCompleted: true,
    }
  }
  updateNewTextValue = (event) => {
    this.setState({ newBookText: event.target.value })
  }
  addNewBook = (toRead) => {
    if (!this.state.books.find((item) => item.title === toRead)) {
      this.setState({
        books: [...this.state.books, { title: toRead, done: false }],
      })
    }
  }
  toggleBook = (book) =>
    this.setState({
      books: this.state.books.map((item) =>
        item.title === book.title ? { ...item, done: !item.done } : item
      ),
    })
  booksTableRows = (doneValue) =>
    this.state.books
      .filter((item) => item.done === doneValue)
      .map((item) => (
        <BooksRow key={item.title} item={item} callback={this.toggleBook} />
      ))
  changeName = (newName) => this.setState({ userName: newName })
  render = () => (
    <div>
      <BooksHeader name={this.state.userName} booksToRead={this.state.books} />
      <div className="container">
        <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#list" data-toggle="tab">
              Lista <i class="bi bi-card-list"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#name" data-toggle="tab">
              Nome <i class="bi bi-person"></i>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="list" className="tab-pane active">
            <BooksCreator callback={this.addNewBook} />
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Lido</th>
                </tr>
              </thead>
              <tbody>{this.booksTableRows(false)}</tbody>
            </table>
            <div className="bg-secondary text-white text-center p-2">
              <VisibilityControl
                description="Livros Lidos"
                isChecked={this.state.showCompleted}
                callback={(checked) =>
                  this.setState({ showCompleted: checked })
                }
              />
            </div>
            {this.state.showCompleted && (
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Lido</th>
                  </tr>
                </thead>
                <tbody>{this.booksTableRows(true)}</tbody>
              </table>
            )}
          </div>

          <div id="name" className="tab-pane">
            <ChangeName callback={this.changeName} />
          </div>
        </div>
      </div>
    </div>
  )
}
