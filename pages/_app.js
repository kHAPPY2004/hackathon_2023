import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Front from "../components/front";
import Problems from "./problems";
// import Carousel from "@/components/carousel";
import MyPage from "@/components/Mypage";
import Navbar from "@/components/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Navbar />
      <MyPage />
      <Front />
      <Problems />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
