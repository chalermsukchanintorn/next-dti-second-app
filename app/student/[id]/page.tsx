export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

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
