import Link from "next/link"
import Image from "next/image"
import './nav.css'
export default function Nav(){
    return(
        <div className="Nav">
            <Image src='/logo.jpeg' alt='Logo' width={70} height={50}/>
            <Link href='./' className="Link"> Home </Link>
            <Link href='./about' className="Link">About </Link>
            <Link href='./contact' className="Link"> Contact </Link>
        </div>
    )
}