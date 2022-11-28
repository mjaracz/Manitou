import { Dispatch } from 'react';
import { FETCH_STORY, FETCH_STORY_FAILURE, FETCH_STORY_SUCCESS } from '../store/actions/stories.action';
import { Story } from '../models/story.model';
import { ActionPayload } from '../store/models/action.model';

export const useApiStory = () => {
	const baseUrl = 'http://localhost:4949';

	const getAllStories = async (dispatch: Dispatch<ActionPayload<Story[] | string>>): Promise<Story[] | string> => {
		dispatch({ type: FETCH_STORY });
		return fetch(`${baseUrl}/stories`)
			.then<Story[]>((res: Response) => res.json())
			.then((data: Story[]) => {
				dispatch({ type: FETCH_STORY_SUCCESS, payload: data })
				return data;
			})
			.catch((err: string) => {
				dispatch({ type: FETCH_STORY_FAILURE, payload: err })
				return err
			})
	}

	return {
		baseUrl,
		getAllStories
	}
}