import React from 'react';

export default function Page({ count }) {
  let pages = [];

  for (let i = 1; i <= count; ++i) {
    pages.push(<li key={i} className={`page-btn ${i === 1 && 'active'}`}>{i}</li>);
  }

  return (
    <section className="pagination flex">
      <ul className="pages flex">{pages}</ul>
    </section>
  );
}
