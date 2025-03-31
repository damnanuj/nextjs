import Card from "@/component/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className= "bg-[ rgb(22, 20, 24);] h-[100vh] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-10 ">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
}
