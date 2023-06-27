import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from "@/common/components/NavBar/NavBar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <NavBar>
            <h1>Title</h1>
        </NavBar>
      </body>
    </Html>
  )
}
