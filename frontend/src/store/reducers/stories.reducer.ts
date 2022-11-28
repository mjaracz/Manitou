import { StoriesState, Story } from 'models/story.model';
import { FETCH_STORY, FETCH_STORY_FAILURE, FETCH_STORY_SUCCESS } from '../actions/stories.action';
import { ActionPayload } from '../models/action.model';

export const initialStories: StoriesState = {
	list: [],
	isLoading: true,
	error: null
}

export const storiesReducer = (state = initialStories, action: ActionPayload<Story[]>) => {
	switch (action.type) {
		case FETCH_STORY:
			return {
				...state,
				isLoading: true
			}
		case FETCH_STORY_SUCCESS:
			return {
				...state,
				isLoading: false,
				list: action.payload
			}
		case FETCH_STORY_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			}
		default: {
			return state
		}
	}
}