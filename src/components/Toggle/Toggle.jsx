import React from 'react'
import styles from './Toggle.css'

class Toggle extends React.Component {
	constructor() {
		super()
		this.state = { test: 'testing css modules' }
	}

	mapChildren() {

	}

	render() {
		const children = React.Children.map(
			this.props.children,
			child => React.isValidElement(child) ?
				React.cloneElement(child, {
					onClick: () => alert('from button ')
				}) : child
			)
		return (
			<div className={styles['container']}>
				{children}
			</div>
		)
	}
}

export default Toggle