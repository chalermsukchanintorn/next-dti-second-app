import MenuBar from "@/components/MenuBar";
import MenuMajor from "@/components/MenuMajor";

export default function Page() {
  return (
    <>
      <MenuBar />
      <h1 className="text-center">ACCOUNT</h1>
      {/* --------ใส่โค้ดแสดงเมนูไปยังสาขาวิชาต่างๆ--------- */}
      <MenuMajor />
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo nobis,
        deserunt magni dicta alias odio ut tempore minus quasi.
      </p>
    </>
  );
}
