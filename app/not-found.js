import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen text-center flex items-center justify-center flex-col gap-5">
      <h2 className="text-3xl">هذه الصفحة غير موجوده</h2>
      <p>نحن نعتزر على هذا الخطء </p>
      <Link href="/" className="text-main">
        العوده الى الصفحة الرئيسية
      </Link>
    </div>
  );
}
