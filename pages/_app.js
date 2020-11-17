import { useEffect } from "react";
import ReactGA from "react-ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize("UA-183254663-1");
  }, []);

  useEffect(() => {
    ReactGA.set({ page: router.pathname });
    ReactGA.pageview(router.pathname);
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
