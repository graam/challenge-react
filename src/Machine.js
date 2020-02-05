import React from 'react';
import { connect } from 'react-redux'
import Websocket from 'react-websocket'

import { fetchMachine, updateMachineHealth } from './actions'

export class Machine extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchMachine(this.props.match.params.machineId))
	}

	handleData(data) {
		let result = JSON.parse(data)
		this.props.dispatch(updateMachineHealth(result))
	}

	render() {
		const { machine } = this.props
		return (
			<div>
				<p>Name: {machine.name}</p>
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