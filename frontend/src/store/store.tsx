import { createContext, FC, useReducer, ReactNode, Dispatch } from 'react';
import { RootState } from './models/root-state.model';
import { StoriesState, Story } from '../models/story.model';
import { ActionPayload } from './models/action.model';
import { initialStories, storiesReducer } from './reducers/stories.reducer';
import useCombinedReducers from 'use-combined-reducers';

export const initialRootState = {
	state: {
		stories: initialStories
	},
	dispatch: (action: ActionPayload<Story[]>) => {}
}

export const StoreContext = createContext(initialRootState);

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [state, dispatch] = useCombinedReducers<RootState, ActionPayload<Story[]>>({ stories: useReducer(storiesReducer, initialStories) });

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			{children}
		</StoreContext.Provider>
	)
}