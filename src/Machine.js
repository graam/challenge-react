import React from 'react';
import { connect } from 'react-redux'
import Websocket from 'react-websocket'

import {
	fetchMachine,
	updateMachine,
	updateMachineName,
	updateMachineHealth
} from './actions'

export class Machine extends React.Component {
	constructor() {
		super()
		this.state = {
			name: ''
		}
	}

	componentDidMount() {
		this.props.dispatch(fetchMachine(this.props.match.params.machineId))
	}

	componentDidUpdate(prevProps) {
		if (this.state.name === '' || prevProps.machine.name !== this.props.machine.name) {
			this.setState({ name: this.props.machine.name })
		}
	}

	handleFormChange(e) {
		this.props.dispatch(updateMachineName(e.target.value))
	}

	updateMachineName() {
		this.props.dispatch(updateMachine(this.props.machine))
	}

	handleData(data) {
		let result = JSON.parse(data)
		if (result.id === this.props.machine.id) {
			this.props.dispatch(updateMachineHealth(result))
		}
	}

	render() {
		const { machine } = this.props
		return (
			<div>Name: <input
				value={this.state.name}
				onChange={e => this.handleFormChange(e)}
			/>
				<button
					title='Save name'
					onClick={() => this.updateMachineName()}
				>save</button>
				<p>IP Address: {machine.ip_address}</p>
				<p>Health: {machine.health}</p>

				<Websocket url='ws://localhost:1337' onMessage={this.handleData.bind(this)} />
			</div >
		)
	}
}

const mapStateToProps = (state) => {
	return {
		machine: state.machine
	}
}

export default connect(mapStateToProps)(Machine)