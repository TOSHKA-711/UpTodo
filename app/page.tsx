import { Lato } from "next/font/google";
import IndexIntroPage from "./pages/intro/page";


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], 
});

export default function Home() {
  
  return (
    <div className={`${lato.className}`}>
      <IndexIntroPage />
    </div>
  );
}
