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
