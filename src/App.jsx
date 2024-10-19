import Random from "./Random";
import Tag from "./Tag";


export default function App() {
  return (
    

    <div className="w-full h-screen flex flex-col background relative overflow-hidden item-center">
      <h1 className=" bg-white rounded-lg w-full text-center
       mt-[40px]  px-10 py-2 text-2xl font-bold " >RANDOM GIFS</h1>

      <div className="flex flex-col w-full items-center gap-y 10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>

  );
}