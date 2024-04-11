import { SideBarProps } from "../types"


export function SideBarControl({onChangeDynamic}: SideBarProps) {
    return <section className="sidebar-control">
        <ul className="clean-list">
          
            <li onClick={() => onChangeDynamic({type: 'Home'})}>
                <span className="material-symbols-outlined">
                    home
                </span>
                <span>
                     Home
                </span>
            </li>
            <li onClick={() => onChangeDynamic({type: 'Search'})}>
                <span className="material-symbols-outlined">
                    search
                </span>
                <span>
                    Search
                </span>
            </li>
        </ul>
    </section>
}