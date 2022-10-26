import  Link  from "next/link";
import Button from "../Button";
import Mainlogo from "../Mainlogo";

export default function Navigation() {
    return (
        <>
            <div className="flex pt-8 px-24 flex-row items-center justify-between w-full">
                <Mainlogo />
                <ul className="flex items-center justify-center gap-6 text-primary text-base capitalize">
                    <Link href="/">
                        <a>
                            <li>Home</li>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a>
                            <li>About</li>
                        </a>
                    </Link>
                    <Link href="/services">
                        <a>
                            <li>Services</li>
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>
                            <li>Projects</li>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <li>Contact</li>
                        </a>
                    </Link>
                </ul>
                <Button text="need a project?" />
            </div>
        </>
    );
}
