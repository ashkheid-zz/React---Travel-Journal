import React from 'react';

export default function Footer({ author }) {
  const now = new Date();
  
  return (
    <footer className="footer">© {now.getFullYear()} | {author}</footer>
  )
}
