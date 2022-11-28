import { useBindingStory } from 'components/stories';
import { MainTemplate } from 'components/templates';

export const Cheyenne = () => {
	const { isLoading, stories, changeText } = useBindingStory();
	return (
		<MainTemplate
			title="Cheyenne Hut"
			isLoading={isLoading}
			stories={stories}
			onUpdateStory={changeText}
		/>
)}