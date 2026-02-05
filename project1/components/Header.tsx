import Link from "next/link";




export default function Header() {
    return(
        <nav className="m-5 flex items-center justify-between bg-gray-800 p-2 rounded-lg">
            
            <div>
                <Link href="/about" className=" m-2 font-bold text-white hover:text-gray-400">About</Link>
                <Link href="/projects" className=" m-2 font-bold text-white hover:text-gray-400">Projects</Link>    
            </div> 
            

        </nav>
    )

    
}