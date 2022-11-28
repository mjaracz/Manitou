import { useBindingStory } from 'components/stories';
import { MainTemplate } from '../../components/templates';

export const Apaches = () => {
	const { isLoading, stories, changeText } = useBindingStory();

	return (
		<MainTemplate
			title="Apaches Hut"
			isLoading={isLoading}
			stories={stories}
			onUpdateStory={changeText}
		/>
	)
}