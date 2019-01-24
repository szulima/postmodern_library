import { CHANGE_SEARCH_FIELD } from './constants';

//action on searchfield sent to reducer
export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

