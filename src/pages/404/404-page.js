import './404-page.css';
import notFoundImage from '../../assets/images/404.svg';
import { ButtonLink } from '../../components/links/link-components';


function NotFoundPage() {
  return (
    <div id="not-found-page">
      <img id="not-found-image" src={notFoundImage} alt="404 with footbag" />
      <div><strong>Oooops!</strong></div>
      <div id="not-found-description">
        <div>This page doesn't exist.</div>
        <div>The link is broken or the page has been moved.</div>
      </div>
      <ButtonLink route="/">BACK TO HOME</ButtonLink>
    </div>
  );
}

export default NotFoundPage;
