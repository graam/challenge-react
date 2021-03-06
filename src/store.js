export const machines = (state = [], action) => {
	switch (action.type) {
		case 'MACHINES_FETCHED':
			return action.machines
		case 'HEALTH_UPDATE':
			return state.map(sm => {
				if (sm.id === action.machine.id) sm.health = action.machine.health
				return sm
			})
		default:
			return state
	}
}

export const machine = (state = {}, action) => {
	switch (action.type) {
		case 'MACHINE_FETCHED':
			return action.machine
		case 'HEALTH_UPDATE':
			return Object.assign({}, state, { health: action.machine.health })
		case 'UPDATE_MACHINE_NAME':
			return Object.assign({}, state, { name: action.name })
		case 'UPDATE_MACHINE':
			return Object.assign({}, action.machine)
		default:
			return state
	}
}
