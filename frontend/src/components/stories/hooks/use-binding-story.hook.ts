import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useApiStory } from 'hooks/use-api-story';
import { Story } from 'models/story.model';
import { StoreContext } from 'store';

export const useBindingStory = () => {
	const { dispatch, state: { stories: { isLoading, list, error } } } = useContext(StoreContext);
	const [stories, setStories] = useState<Story[]>([])
	const [newlyStoryIndex, setNewlyStoryIndex] = useState<number>();
	const { getAllStories } = useApiStory();
	useEffect(() => {
		getAllStories(dispatch)
	}, [])
	useEffect(() => {
		if (!isLoading && !stories.length && !error) {
			const sortedStories = list.sort((story0, story1) => story0.id - story1.id);
			console.log(sortedStories, list, isLoading, error);
			setNewlyStoryIndex(++sortedStories[sortedStories.length - 1].id)
			setStories(sortedStories)
		}
	}, [isLoading])
	const changeText = (e: ChangeEvent<HTMLDivElement>) => {
		const newlyAddedStory = stories.find((story) => story.id === newlyStoryIndex);
		if (!newlyAddedStory) {
			setStories([...stories, {
				...stories[stories.length - 1],
				body: e.currentTarget.innerText,
				id: newlyStoryIndex
			}]);
		}
		const updatedStories = stories.map(story => {
			if (story.id === newlyStoryIndex) {
				story.body = e.currentTarget.innerText;
				return story;
			}
			return story;
		})
		setStories(updatedStories);
	}

	return {
		changeText,
		isLoading,
		stories,
		error
	}
}