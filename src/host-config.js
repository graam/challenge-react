let backendHost

const hostname = window && window.location && window.location.hostname

if (hostname === 'localhost') {
	backendHost = 'http://localhost:8080'
} else {
	backendHost = ''
}

export const HOST_ROOT = `${backendHost}`
