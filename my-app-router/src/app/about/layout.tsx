export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-blue-400">
        <ul className="p-5">
          <li>Hallo</li>
          <li>Tes</li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
