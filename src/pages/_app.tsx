import "@/styles/globals.css";
import "./nav/Nav.css";
import "./main/Main.css"
import "./main/Frame.css"
import "./screens/Desktop-size.css"
import "./main/content/Works.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
