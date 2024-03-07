import React from "react";
import { AppProps } from "next/app";
import HomePage from "./pages/home"; // Import the HomePage component

function MyApp({ Component, pageProps }: AppProps) {
  return <HomePage {...pageProps} />; // Render the HomePage component as the default component
}

export default MyApp;
