import { gql } from '@apollo/client'

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
export const QUERY_USER = gql`
	query users($username: String) {
		username
	}
`

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
