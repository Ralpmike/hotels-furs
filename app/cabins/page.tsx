interface Cabin {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const metadata = {
  title: "Cabins",
  description: "Cabins page",
}

export default async function Cabins() {
  let data: Cabin[] = [];

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  return (
    <div className=" flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">Cabins Page</h1>

      <ul className=" grid grid-cols-1 gap-2">
        {data.slice(0, 9).map((item) => (
          <li key={item.id} className="flex flex-col gap-2">
            <p className="text-2xl">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
