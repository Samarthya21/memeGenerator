import Image from 'next/image'
import Header from "../components/Header.js"
import Meme from "../components/Meme.js"

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between">
    <Header/>
    <Meme/>
    </main>
  ) 
}
