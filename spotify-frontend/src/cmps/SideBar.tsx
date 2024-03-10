import { SideBarControl } from "./SideBarControl"
import { SideBarLib } from "./SideBarLib"
import { SideBarProps } from "../types"

export function SideBar({onChangeDynamic}: SideBarProps) {
    return <div className="sidebar">
        <SideBarControl onChangeDynamic={onChangeDynamic}/>
        <SideBarLib />
    </div>
}