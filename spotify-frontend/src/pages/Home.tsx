import { SideBar } from "../cmps/SideBar"
import { Footer } from "../cmps/Footer"
import { Dynamic } from "../cmps/Dynamic"
import { Type } from "../types"
import { useState } from "react"
export function Home() {
    const [typeForDyn, setTypeForDyn] = useState('Home')

    function onChangeDynamic(t: Type) {
        setTypeForDyn(t.type)
        return t.type
    }
    
    return <div className="main-view">
        <SideBar onChangeDynamic={onChangeDynamic}/>
        <Dynamic type={typeForDyn} />
        <Footer />
    </div>
}