/**
 * A component representing a pagination component.
 *  current - The current page number.
 *  onChange - The function to handle page change.
 */

function Pagination({ current, onChange }) {
  const prev = (
    <button
      disabled={current === 1}
      onClick={() => onChange(current - 1)}
      className="page-button"
    >
      PREV
    </button>
  );
  const currentPage = <button className="page-button">{current}</button>;
  const next = (
    <button onClick={() => onChange(current + 1)} className="page-button">
      NEXT
    </button>
  );

  return (
    <div className="page-box">
      {prev}
      {currentPage}
      {next}
    </div>
  );
}

export default Pagination;
