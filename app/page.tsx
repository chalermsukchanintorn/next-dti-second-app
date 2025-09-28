//rfc Snippet สร้าง Function Component ทั่วๆ ไป
//np Snippet สร้าง Page Component
import MenuBar from "@/components/MenuBar";

export default function Page() {
  return (
    <>
      <MenuBar />
      <h1 className="text-center">Welcome to DTI-SAU</h1>
      <h1 className="text-center font-bold text-green-800">
        Chanintorn Chalermsuk
      </h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo nobis, deserunt magni dicta alias odio ut tempore minus quasi.
      </p>
    </>
  );
}
