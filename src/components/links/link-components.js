import { Link } from "react-router-dom";
import './link-components.css';

function ButtonLink(props) {
  const route = props.route;
  const label = props.label;
  const external = props.external === true;

  if(external === true) {
    return (
      <a href={route} target="_blank">
        <button className="button-link">
          <strong>{label}</strong>
        </button>
      </a>
    );
  } else {
    return (
      <Link to={route}>
        <button className="button-link">
          <strong>{label}</strong>
        </button>
      </Link>
    );
  }  
}

function ImageLink(props) {
  const route = props.route;
  const src = props.src;
  const id = props.id;
  const className = props.className;
  const height = props.height;
  const width = props.width;

  return (
    <Link to={route}>
      <img id={id} src={src} className={className} width={width} height={height} />
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
