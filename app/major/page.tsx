import MenuBar from "@/components/MenuBar";
import MenuMajor from "@/components/MenuMajor";

export default function Page() {
  return (
    <>
        <MenuBar />
        <h1 className="text-center">สาขาวิชาต่างๆ ในมหาวิทยาลัย</h1>
        {/* --------ใส่โค้ดแสดงเมนูไปยังสาขาวิชาต่างๆ--------- */}
        <MenuMajor />
        {/* -------------------------------------------- */}
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio consectetur harum dignissimos nam veritatis quidem expedita aut accusantium provident eos, earum quasi non tempora aliquam, quos tenetur, corporis sit id!
        </p>
    </>
  );
}