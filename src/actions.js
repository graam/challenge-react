import Axios from 'axios'
import { HOST_ROOT } from './host-config'

const hostUrl = `${HOST_ROOT}`

export function fetchMachines() {
	return (dispatch) => {
		Axios.get(hostUrl + '/machines')
			.then(res => {
				dispatch({
					type: 'MACHINES_FETCHED',
					machines: res.data
				})
			})
			.catch(error => {
				console.error('Error on fetching machines details:', error)
			})
	}
}

export function fetchMachine(id) {
	return (dispatch) => {
		Axios.get(hostUrl + '/machines/' + id)
			.then(res => {
				dispatch({
					type: 'MACHINE_FETCHED',
					machine: res.data
				})
			})
			.catch(error => {
				console.error('Error on fetching machine details:', error)
			})
	}
}

export function updateMachineHealth(machine) {
	return (dispatch) => {
		dispatch({
			type: 'HEALTH_UPDATE',
			machine
		})
	}
}

export function updateMachineName(name) {
	return {
		type: 'UPDATE_MACHINE_NAME',
		name
	}
}

export function updateMachine(machine) {
	return (dispatch) => {
		Axios.put(hostUrl + '/machines/' + machine.id, machine)
			.then(res => {
				dispatch({
					type: 'UPDATE_MACHINE',
					machine: res.data
				})
			})
			.catch(error => {
				console.error('Error on updating machine details:', error)
			})
	}
}