import './link-components.css';
import { Link } from "react-router-dom";

function LinkWrapper(props) {
  const external = props.external === true;
  const route = props.route;

  if(external) {
    return (
      <a href={route} target="_blank" rel="noreferrer">
        { props.children }
      </a>
    );
  } else {
    return (
      <Link to={route}>
        { props.children }
      </Link>
    );
  }
}

function ButtonLink(props) {
  let className = props.className ? props.className : 'button-link';
  className += ' button-link_base';

  return (
    <LinkWrapper external={props.external} route={props.route}>
      <button className={className}>
        <strong>{ props.children }</strong>
      </button>
    </LinkWrapper>
  );
}

function ImageLink(props) {
  const src = props.src;
  const alt = props.alt;
  const id = props.id;
  const className = props.className;
  const height = props.height;
  const width = props.width;

  return (
    <LinkWrapper external={props.external} route={props.route}>
      <img id={id} src={src} className={className} width={width} height={height} alt={alt} />
    </LinkWrapper>
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
