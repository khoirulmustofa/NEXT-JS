import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex bg-gray-800 py-2 px-2">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex">
        <Link href="/">
          <li className="mr-3 ml-5 text-gray-400 cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
          <li className="mr-3 text-gray-400 cursor-pointer">About</li>
        </Link>
        <Link href="/about/profile">
          <li className="mr-3 text-gray-400 cursor-pointer">Profile</li>
        </Link>
      </ul>
    </nav>
  );
}
