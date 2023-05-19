import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Front from "../components/front";
import Problems from "./problems";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Front />
      <Problems />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
