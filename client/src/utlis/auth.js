import decode from 'jwt-decode'

class AuthService {
	getUser() {
		return decode(this.getToken())
	}
	//check login status
	loggedIn() {
		const token = this.getToken()
		return !!token && !this.isTokenExpired(token)
	}
	isTokenExpired(token) {
		try {
			const decoded = decode(token)
			if (decoded.exp < Date.now() / 1000) {
				return true
			} else {
				return false
			}
		} catch (err) {
			return false
		}
	}
	getToken() {
		return localStorage.getItem('id_token')
	}
	//login and save token
	login(idToken) {
		localStorage.setItem('id_token', idToken)
	}
	//logout and redirect to home
	logout() {
		localStorage.removeItem('id_token')
		window.location.assign('/')
	}
}

export default new AuthService()