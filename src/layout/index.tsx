import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from './header';

const DynamicFooter = dynamic(() => import('./footer'), {
  ssr: false,
});

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Food</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <DynamicFooter />
    </>
  );
};

export default Layout;