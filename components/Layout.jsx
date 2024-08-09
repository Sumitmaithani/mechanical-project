import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Gear</title>
        <meta
          name="description"
          content="Gear is a tool to effortlessly generate accurate gears for every engineering project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
