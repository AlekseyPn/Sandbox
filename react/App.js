import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu'
import Summary from './components/Summary'
import data from './data/recipes'

window.React = React
render(
  <Summary title="Some recipes summary" ingredients={data[0].ingredients.length} steps={data[0].steps.length}/>,
  document.getElementById('app')
)