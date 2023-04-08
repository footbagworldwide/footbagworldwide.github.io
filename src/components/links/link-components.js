import { Link } from "react-router-dom";
import './link-components.css';

function ButtonLink(props) {
  let className = props.className ? props.className : 'button-link';
  const route = props.route;
  const external = props.external === true;

  className += ' button-link_base';

  if(external === true) {
    return (
      <a href={route} target="_blank" rel="noreferrer">
        <button className={className}>
          { props.children }
        </button>
      </a>
    );
  } else {
    return (
      <Link to={route}>
        <button className={className}>
          { props.children }
        </button>
      </Link>
    );
  }  
}

function ImageLink(props) {
  const route = props.route;
  const src = props.src;
  const alt = props.alt;
  const id = props.id;
  const className = props.className;
  const height = props.height;
  const width = props.width;

  return (
    <Link to={route}>
      <img id={id} src={src} className={className} width={width} height={height} alt={alt} />
    </Link>
  );
}

function EmailLink(props) {
  const className = props.className;
  const emailAddress = 'info@footbagworldwide.com';

  return (
    <a className={className} href={`mailto:${emailAddress}`}>
      { props.children }
    </a>
  );
}

export { ButtonLink, ImageLink, EmailLink };
