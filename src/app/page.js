import Header from "@/components/Header";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";



export default function Home() {
  return (
    <>
      <Header/>
      {/* body */}
      <div className="flex mt-32 justify-center items-center">
        <Image width="300" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSugzlUGL5yh2xVnh6GzR6Pt49WXGFkeTgIQ4mEFzgqzdBp1ykpf_o0EyFNrOFRrfETJ3k&usqp=CAU" alt="googley
        " ></Image>
      </div>
      <HomeSearch/>
    </>
  )
}
