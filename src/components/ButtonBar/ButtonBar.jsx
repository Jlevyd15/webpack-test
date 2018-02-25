import React from 'react'
import PropTypes from 'prop-types'

export class ButtonBar extends React.Component {
	constructor(props) {
		super(props)
		this.buttonBarData = this.buttonBarData.bind(this)
	}
	buttonBarData () {
		return 'this is the ButtonBar data'
	} 

	render() {
		return (
			<div>
				<div>This is something else needed</div>
				{this.props.render(this.buttonBarData)}
			</div>
		)
	}
}

ButtonBar.propTypes = {
	render: PropTypes.func
}

export default ButtonBar