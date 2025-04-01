import Image from "next/image";
import { motion } from "framer-motion"; // Import motion
import logo from "@/assests/tamagui.png";

export default function Header({ showInput }: { showInput: boolean }) {
  return (
    <div
      className={`fixed top-0 right-0 z-20 left-0 flex h-[80px] shadow-md justify-between items-center px-15 transition-all duration-300 bg-[linear-gradient(90deg,#0EA5E9_0%,#74CFFF_51%,#0EA5E9_95%)]`}
    >
      <Image src={logo} width={45} height={45} alt="logo" />

      {/* Animated Input Field */}
      <motion.input
        placeholder="Where to?"
        type="text"
        className="text-black w-[35%] rounded-xl hidden lg:block bg-white px-4 py-3"
        initial={{ opacity: 0, y: 20 }} // Start hidden and below position
        animate={{ opacity: showInput ? 1 : 0, y: showInput ? 0 : 20 }}
        transition={{ duration: 0.25, ease: "easeOut", delay: 0.1 }}
      />

      <Image
        src={"https://img.icons8.com/office/50/user.png"}
        width={35}
        height={35}
        alt="user-icon"
      />
    </div>
  );
}
