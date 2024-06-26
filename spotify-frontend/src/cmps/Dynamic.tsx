import { Header } from "./Header";
import { Type } from "../types"; 
// import { Playlists } from "./Playlists";
import { DynamicFooter } from "./DynamicFooter";
import { HomeStation } from "./HomeStation";


export function Dynamic(t: Type) {

    const renderContent = () => {
        switch (t.type) {
            case 'Home':
                return <div className="dyn-home">
                    <HomeStation />
                </div>
            case 'Search':
                return <div className="dyn-search">Search</div>
            default:
                break;
        }
    }
    return <div className="dynamic-con">
        <Header />
        {renderContent()}
        <DynamicFooter />
    </div>
}