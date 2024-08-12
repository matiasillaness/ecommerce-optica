 

export default function Navbar() {

    return (

        <div className="flex justify-around items-center w-screen bg-emerald-500">
            <div>

            <img src="frontend\src\assets\optica_colon-removebg-preview.png" alt="elpeep" />

            </div>
            <div className="">

                <form action="">

                    <div className="flex p-4">
                        <span role="status" aria-live="polite" className="ui-helper-hidden-accessible"></span>
                        <input className="rounded-md p-1" type="text" placeholder="Buscar productos" />
                        <div className="">
                            <button className="" type="submit" aria-label="Buscar en">

                            </button>
                        </div>
                    </div>


                </form>

                
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>

        </div>
    )



}