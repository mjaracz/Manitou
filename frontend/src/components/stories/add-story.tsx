import { ChangeEvent, FC } from 'react';
import './add-story.css';

export interface AddStoryProps {
  onUpdateStory: (e: ChangeEvent<HTMLDivElement>) => void;
}

export const AddStory: FC<AddStoryProps> = (props) => {
  return(
    <div
      className="main__edit"
      contentEditable={true}
      suppressContentEditableWarning={true}
      onInput={props.onUpdateStory}
      onBlur={props.onUpdateStory}
    >
      Add something from yourself to the story.
      Just start typing here.
      <br/>
      <br/>
      Have fun creatively!!
    </div>
  )
}
