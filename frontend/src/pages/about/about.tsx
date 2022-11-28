import { InfoTemplate } from 'components/templates/info.template';

export const About = () => {
  const mainText = (
    <>
      <p>
        Let's create a novel written by thousands of users!
        Choose one of the prepared thematic threads.

        Decide which tribe you will be in.
      </p>

      <p>
        Walk through an Indian hut covered with deer thatch.
        The smell of forest mulch, the depth of the distant night sky and the vastness of the twenty-foot-tall trees reach the lost mind of an Indian.
        You don't know where you are, what you are doing here, you get your bearings when you notice that you are in the middle of a dense forest, being a member of an Amazonian tribe.
        Remote from civilization, relying only on yourself and your creativity.
      </p>
    </>
  )
  return <InfoTemplate title="About the Project" MainText={mainText}/>
}
