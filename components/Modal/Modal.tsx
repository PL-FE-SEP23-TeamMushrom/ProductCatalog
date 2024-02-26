import { useRouter } from "next/navigation";

  
  const Modal =()=> {
    const router = useRouter();

    const backToHome = () => {
        router.push("/");
    }
    return (
        <>
            {
                <dialog
                    className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                    <div className="bg-elements-color m-auto p-8">
                        <div className="flex flex-col items-center">
                            <h1 className="text-2xl font-extrabold">Thank you for your order</h1>
                            <br/>
                                <button type="button" className="bg-primary-color text-white p-2" onClick={backToHome}>Return to home page</button>
                        </div>
                    </div>
                </dialog>
            }
        </>
    );
};

export default Modal