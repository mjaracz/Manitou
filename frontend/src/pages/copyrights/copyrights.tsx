import { InfoTemplate } from 'components/templates/info.template';

export const Copyrights = () => {
  const mainText = (
    <>
      <p>
        Eventually, the book, which will be composed of the texts of users,
        will be signed with the name given at registration, or with the user's name.
        In this way, a novel will be created, the cover of which will be the signatures of its authors (users of the application).
        At the end of the book, a list of authors will be included, along with the number of characters used during the use of the portal.
      </p>
    </>
  )
  return <InfoTemplate title="Author Copyrights" MainText={mainText} />
}