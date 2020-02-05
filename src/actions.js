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
				console.log(error)
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
				console.log(error)
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
