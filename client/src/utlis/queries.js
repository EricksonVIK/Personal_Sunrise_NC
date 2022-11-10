import { gql } from '@apollo/client'

// Get all events
export const QUERY_EVENTS = gql`
	query Query {
		events {
			_id
			start
			end
			title
		}
	}
`
// Get all reservation requests
export const QUERY_RESERVATIONS = gql`
	query Query2 {
		events {
			start
			end
			title
		}
		requests {
			start
			end
			username
			email
		}
	}
`

// Get single user based on username
export const QUERY_USER = gql`
	query users($username: String) {
		username
	}
`
// Log user in
export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`
// Add user
export const ADD_USER = gql`
	mutation addUser($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
				username
			}
		}
	}
`
// Add user reservation which must then be confirmed by owner
export const ADD_RESERVATION = gql`
	mutation ($username: String!, $start: String, $end: String, $email: String!) {
		addReservation(
			username: $username
			start: $start
			end: $end
			email: $email
		) {
			_id
		}
	}
`
/* 

	Add user reservation to event list and then delete that reservation
  Note that loginType is required which is an owner-only attribute
  EVERY ARGUMENT BUT loginType COMES FROM USERS RESERVATION 
 
 */
export const ADD_EVENT = gql`
	mutation (
		$loginType: String!
		$start: String!
		$end: String!
		$title: String!
		$username: String!
		$email: String!
	) {
		addEvent(
			loginType: $loginType
			start: $start
			end: $end
			title: $title
			username: $username
			email: $email
		) {
			_id
		}
	}
`
