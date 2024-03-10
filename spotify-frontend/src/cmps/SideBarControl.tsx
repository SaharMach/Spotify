import { SideBarProps } from "../types"


export function SideBarControl({onChangeDynamic}: SideBarProps) {
    return <section className="sidebar-control">
        <ul>
            <li>
                Spotify
            </li>
            <li onClick={() => onChangeDynamic({type: 'Home'})}>
                Home
            </li>
            <li onClick={() => onChangeDynamic({type: 'Search'})}>
                Search
            </li>
        </ul>
    </section>
}