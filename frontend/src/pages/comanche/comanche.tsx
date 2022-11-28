import { useBindingStory } from 'components/stories';
import { MainTemplate } from '../../components/templates';

export const Comanche = () => {
	const { isLoading, stories, changeText } = useBindingStory();

	return (
		<MainTemplate
			title="Comanche Hut"
			isLoading={isLoading}
			stories={stories}
			onUpdateStory={changeText}
		/>
	)
}