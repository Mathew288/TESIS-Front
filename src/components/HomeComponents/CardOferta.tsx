interface CardOferta {
    titulo:string,
    texto:string,
    image:string,

}
export default function CardOferta({ titulo, texto, image }: CardOferta) {
    // Agregar 'col-span-2' solo si la clase está presente
   
    return (
      <div className="'flex flex-col bg-gray-800 h-[350px] w-[350px] p-5 rounded-lg items-center justify-center hover:-translate-y-3 hover:cursor-pointer duration-150 ease-linear">
        <img src={image} alt="" className="rounded-md h-[250px] w-[300px] object-cover mx-auto" />
        <h3 className="text-center text-white font-semibold text-xl">{titulo}</h3>
        <p className="text-center text-white">{texto}</p>
      </div>
    );
  }
  
