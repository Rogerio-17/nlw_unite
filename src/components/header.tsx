import nlwUnitIcon from "../assets/nlw-unite-icon.svg"

export function Header() {
    return (
        <div className="flex items-center gap-5 ">
            <img src={nlwUnitIcon} />

            <nav className="flex items-center gap-5 py-2"> 
                <a href="" className="font-medim text-sm text-zinc-300">Eventos</a>
                <a href="" className="font-medim text-sm">Participantes</a>
            </nav>
        </div>
    )
}