import Layout from "@/components/layout";
import SearchProvider from "@/provider/search-provider";

import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </SearchProvider>
  );
}
