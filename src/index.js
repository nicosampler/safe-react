// @flow
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')

const Root = () => <div>as</div>

if (root !== null) {
  ReactDOM.render(<Root />, root)
}
