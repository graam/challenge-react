import { combineReducers } from 'redux'

import { machine, machines } from './store'

const reducers = combineReducers({
	machine,
	machines
})

export default reducers