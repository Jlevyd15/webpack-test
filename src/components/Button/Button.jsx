import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export class Button extends React.Component {
	render() {
		return (
			<Fragment>
			other things
			<button onClick={() => alert(this.props.buttonBarData())}>{this.props.children}</button>
			another
			</Fragment>
		)

	}
}

Button.propTypes = {
	children: PropTypes.node,
	buttonBarData: PropTypes.func
}

export default Button