export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="bg-myGreen text-myPink font-bold mt-auto p-3 flex items-center justify-center gap-5 border-t-3 border-myDarkGreen">
            <p className="text-xl">@Arman {year}</p>
            <a href="https://github.com/arman-101/dandelions" target="_blank" rel="noopener noreferrer">
                <img className="w-8 cursor-pointer transition-transform duration-75 hover:scale-105" src="github.png" alt="github"/>
            </a>
        </footer>
    )
}