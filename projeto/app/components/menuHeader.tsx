import { IoClose } from "react-icons/io5";
import Link from "next/link";

type props = {
    onClose: () => void;
}

export default function MenuHeader({onClose}: props) {
    return (
        <div className="bg-orange-300 border-l-5 border-orange-500">
            <div className="h-[100vh] w-[90vw] flex flex-col gap-5 text-2xl">
                <div className="flex justify-end">
                    <button onClick={onClose} className="">
                        <IoClose size={50}/>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 font-semibold text-orange-900">
                    <Link href={"/pages/cadastro"} className="cursor-pointer w-[80%] flex justify-center border-b-2 border-white">
                        Login
                    </Link>
                    <Link href={"/pages/cadastro"} className="cursor-pointer w-[80%] flex justify-center border-b-2 border-white">
                        Cadastro
                    </Link>
                </div>
            </div>
        </div>
    )
}