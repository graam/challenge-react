import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Websocket from 'react-websocket'

import { fetchMachines, updateMachineHealth } from './actions'

export class Machines extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchMachines())
	}

	handleData(data) {
		let result = JSON.parse(data)
		this.props.dispatch(updateMachineHealth(result))
	}

	render() {
		const { machines } = this.props

		return (
			<div>
				<ul>{
					machines.map(
						(machine) => <li key={machine.id}><Link to={'/machines/' + machine.id}>Name: {machine.name}, IP Address: {machine.ip_address}, Health: {machine.health}</Link></li>
					)
				}</ul>

				<Websocket url='ws://localhost:1337' onMessage={this.handleData.bind(this)} />
			</div >
		)
	}
}

const mapStateToProps = (state) => {
	return {
		machines: state.machines
	}
}

export default connect(mapStateToProps)(Machines)