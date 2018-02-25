import React from 'react'
import PropTypes from 'prop-types'
import Toggle from './Toggle/Toggle.jsx'
import Button from './Button/Button.jsx'
import ButtonBar from './ButtonBar/ButtonBar.jsx'

export class App extends React.Component {

	render() {
		return (
			<div>
				<Toggle>
					<button>another child</button>
					<button>first button</button>
				</Toggle>
				<ButtonBar render={buttonBarData => <Button buttonBarData={buttonBarData}>test</Button>} />
			</div>
		)
	}
}

export default App