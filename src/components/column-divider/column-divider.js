import './column-divider.css';

function ColumnDivider(props) {
  const className = props.className ?? null;

  return (
    <div className={`column-divider ${className}`}></div>
  );
}

export default ColumnDivider;
