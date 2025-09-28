import Link from "next/link";

export default function MenuMajor() {
  return (
    <>
      <div className="flex  justify-center gap-4 py-6 text-blue-800">
        <Link href="/major">หน้าหลักสาขาวิชา</Link>
        <Link href="/major/account">ACCOUNT</Link>
        <Link href="/major/dm">DM</Link>
        <Link href="/major/dti">DTI</Link>
        <Link href="/major/marketing">MARKETING</Link>
      </div>
    </>
  );
} 