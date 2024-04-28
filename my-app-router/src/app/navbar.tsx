import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <nav className="flex justify-between bg-gray-800 py-2 px-2">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex">
          <Link href="/">
            <li
              className={`mr-3 ml-5 ${
                pathName === "/" ? "text-blue-600" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${
                pathName === "/about" ? "text-blue-600" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 ${
                pathName === "/about/profile" ? "text-blue-600" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
       
      </div>
      <button
          className="bg-white rounded-md px-3 text-sm cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
    </nav>
  );
}
