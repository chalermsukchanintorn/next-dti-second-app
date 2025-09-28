export default async function Page({ params }: { params: Promise< { id: string } >})  {
  const { id } = await params;

  return (
    <>
      <h1>Student ID : {id} </h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quo nobis,
        deserunt magni dicta alias odio ut tempore minus quasi.
      </p>
    </>
  );
}
