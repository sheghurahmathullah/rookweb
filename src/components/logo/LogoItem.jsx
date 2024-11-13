import Link from "next/link";
import LogoWhite2 from "../../../public/assets/imgs/rook/rook-white.webp";
import LogoBlack from "../../../public/assets/imgs/rook/rook.png";
import Image from "next/image";

const logoSize = 40

export default function LogoItem() {
  return (
    <>
      <div className="header__logo-2">
        <Link href={"/"} className="logo-dark">
          <Image
            priority
            // width={136}
            height={60}
            src={LogoBlack}
            alt="Site Logo"
          />
        </Link>
        <Link href={"/"} className="logo-light">
          <Image
            priority
            // width={100}
            height={60}
            src={LogoWhite2}
            alt="Site Logo"
          />
        </Link>
      </div>
    </>
  );
}
