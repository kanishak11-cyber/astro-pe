import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
import Logo from "../../public/astroPe.png";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className={`${styles.navbar} eth-card`}>
      <Image src={Logo} alt="AstroPe Logo" width={150} height={50} />
      <div className="text-white ">
        <ul className="flex  flex-row justify-evenly w-[40vw] text-[20px]">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/About">
            <li>About</li>
          </Link>
          <Link href="/Product">
            <li>Product &amp; Service</li>
          </Link>
          <Link href="/ContactUs">
            <li>Contact Us</li>
          </Link>
          <Link href="/Blog">
            <li>Blog</li>
          </Link>
          <Link href="/Faq">
            <li>FAQ</li>
          </Link>
        </ul>
      </div>
      <ConnectButton></ConnectButton>
    </nav>
  );
}
