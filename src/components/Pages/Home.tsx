import CardOferta from "../HomeComponents/CardOferta";
import HomeMainCard from "../HomeComponents/HomeMainCard";
import { ButtonPrimary } from "../UI/Button";

export default function Home() {
    return (
        <>
            <HomeMainCard />
            <h2 className="text-center text-2xl m-20 font-bold">Conoce nuestras ofertas</h2>

            <div className="flex w-[100%] items-center justify-center">

                <div className="grid grid-cols1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-20 w-[90%] place-items-center">
                    <CardOferta titulo="Lorem" texto="asdasdad" image="https://www.espaciosanitario.com/uploads/s1/29/14/50/8/posicionamiento-semergen.png" />
                    <CardOferta titulo="Lorem" texto="asdasdad" image="https://www.espaciosanitario.com/uploads/s1/29/14/50/8/posicionamiento-semergen.png" />
                    <CardOferta titulo="Lorem" texto="asdasdad" image="https://www.espaciosanitario.com/uploads/s1/29/14/50/8/posicionamiento-semergen.png" />
                    <CardOferta titulo="Lorem" texto="asdasdad" image="https://www.espaciosanitario.com/uploads/s1/29/14/50/8/posicionamiento-semergen.png" />
                    <ButtonPrimary>Ver más ofertas</ButtonPrimary>
                </div>
            </div>
        </>
    )
}