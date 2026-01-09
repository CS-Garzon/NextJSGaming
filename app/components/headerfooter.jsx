import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* This is our new header */}
      <div className="sticky top-0">
        <div className="flex justify-between">
          <div>
            <span>DASHBOARD</span>
          </div>
          <nav className="mr-4">
            <Link className="p-2 hover:bg-blue-500" href="/home">Home</Link>
            <Link className="p-2" href="/about">About</Link>
            <Link className="p-2" href="/LloydLovesChildrenARG">Contact</Link>
          </nav>
        </div>
      </div>
      {/* End of Header and start of the main div */} 
    </>
  );
}

export function Footer() {
  return (
    <>
      {/* This is our new header */}
      <div className="sticky top-0">
        <div className="flex justify-between">
          <div>
            <span>DASHBOARD</span>
          </div>
          <nav className="mr-4">
            <Link className="p-2 hover:bg-blue-500" href="/home">Home</Link>
            <Link className="p-2" href="/about">About</Link>
            <Link className="p-2" href="/LloydLovesChildrenARG">Contact</Link>
          </nav>
        </div>
      </div>
      {/* End of Header and start of the main div */} 
    </>
  );
}
