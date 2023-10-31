import Header from "@/components/Header";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Header/>
      {/* body */}
      <div className="flex mt-5 justify-center items-center">
        <Image width="300" height="100" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F2f%2FGoogle_2015_logo.svg%2F2560px-Google_2015_logo.svg.png&tbnid=oiEC2xlywfV5fM&vet=12ahUKEwig6NjK_J-CAxXi5TgGHbgYAvUQMygBegQIARBX..i&imgrefurl=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AGoogle_2015_logo.svg&docid=rM6rqnYyfyQPcM&w=2560&h=866&q=google%20svg&hl=en&ved=2ahUKEwig6NjK_J-CAxXi5TgGHbgYAvUQMygBegQIARBX" alt="google" ></Image>
      </div>
    </>
  )
}
