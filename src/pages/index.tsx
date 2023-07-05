import { Inter } from 'next/font/google'
import NavBar from "@/common/components/NavBar/NavBar";
import CloseButton from "@/common/components/Buttons/CloseButton";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const demo = () => {

  }

  return (
    <>
      <CloseButton onClick={demo}/>
    </>
  )
}
