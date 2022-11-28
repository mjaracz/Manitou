import { FC } from 'react';
import { Story } from './story'
import { Story as StoryModel } from 'models/story.model';
import './stories.css'

export interface  StoriesProps {
  stories: StoryModel[];
}

export const Stories: FC<StoriesProps> = ({ stories }) => {
  return (
    <div className='main__page'>
      {stories.map(story => (<Story key={story.id} story={story} />))}
    </div>
  )
}
