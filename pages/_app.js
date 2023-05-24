import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Front from "../components/front";
import Problems from "./problems";
// import Carousel from "@/components/carousel";
import MyPage from "@/components/Mypage";
import Navbar from "@/components/Navbar";
import Rules from "@/components/Rules";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      <MyPage />
      <Front />
      <Problems />
      <Rules />
      <Faq />
      <Contact />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
