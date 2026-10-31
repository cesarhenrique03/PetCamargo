type props = {
    onClose: () => void;
}

export default function MenuHeader({onClose}: props) {
    return (
        <div className="bg-orange-600">
            <div className="h-[100vh] w-[90vw]">
                <button onClick={onClose}>
                    fechar
                </button>
                <div className="flex flex-col justify-center items-center">
                    <p>Login</p>
                    <p>Cadastrar</p>
                </div>
            </div>
        </div>
    )
}