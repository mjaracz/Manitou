import { Story as StoryModel } from 'models/story.model';
import './story.css'

export interface StoryProps {
  story: StoryModel;
}
export const Story = ({ story }: StoryProps) => (
  <div className='stories__item'>
    <h3 className='item__title'>{story.title}</h3>
    <p className='item__body'>{story.body}</p>
    <p className='item__author'>{story.author}</p>
  </div>
)
