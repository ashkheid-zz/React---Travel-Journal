import React from 'react';
import Theme from './components/Theme';
import Header from './components/Header';
import Article from './components/Article';
import Page from './components/Page';
import Footer from './components/Footer';

import getData from './data';

import headerIcon from './icons/earth.png';


export default function App() {
  let i = 1;
  return (
    <>
      <Theme theme={['red', 'teal', 'indigo', 'amber']} />
      <Header title="My Travel Journal" icon={headerIcon} />
      <main className="main">
        {getData().map(data => <Article key={++i} {...data} />)}
        <Page count={3}/>
      </main>
      <Footer author="Ashkan"/>
    </>
  );
}
