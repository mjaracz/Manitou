import { InfoTemplate } from 'components/templates/info.template';

export const Contact  = () => {
  const mainText = (
    <>
      <p>Hunt for a creative story </p>
      <p>...And contact us at the following address:</p>
      <p><b>example@manitou.io</b></p>
    </>
  )
  return <InfoTemplate title="Contact" MainText={mainText}/>
}
