import { Header } from "./Header";
import { Type } from "../types"; 
export function Dynamic(t: Type) {

    const renderContent = () => {
        switch (t.type) {
            case 'Home':
                return <div className="dyn-home">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga unde iusto velit, expedita illum voluptatum quidem suscipit itaque vitae natus saepe pariatur rem totam 
                officiis dicta consequatur sed! Ipsa. Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit. Fugiat minima eos, deserunt omnis iure 
                 facere laboriosam optio adipisci dolores aliquid est maiores fuga eum aut
                  atque recusandae vel necessitatibus accusamus! Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. Sequi incidunt fuga dolor recusandae. Neque fugit et
                   , impedit aspernatur facilis facere! Dicta ad fuga voluptas tempora omnis corporis i
                   llo aperiam a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt aliquam repellendus numquam eveniet sapiente distinctio, voluptatum sint non, sed ratione quam asperiores facere unde molestiae
                    magnam expedita vero hic!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga unde iusto velit, expedita illum voluptatum quidem suscipit itaque vitae natus saepe pariatur rem totam 
                officiis dicta consequatur sed! Ipsa. Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit. Fugiat minima eos, deserunt omnis iure 
                 facere laboriosam optio adipisci dolores aliquid est maiores fuga eum aut
                  atque recusandae vel necessitatibus accusamus! Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. Sequi incidunt fuga dolor recusandae. Neque fugit et
                   , impedit aspernatur facilis facere! Dicta ad fuga voluptas tempora omnis corporis i
                   llo aperiam a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt aliquam repellendus numquam eveniet sapiente distinctio, voluptatum sint non, sed ratione quam asperiores facere unde molestiae
                    magnam expedita vero hic!
                    
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga unde iusto velit, expedita illum voluptatum quidem suscipit itaque vitae natus saepe pariatur rem totam 
                officiis dicta consequatur sed! Ipsa. Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit. Fugiat minima eos, deserunt omnis iure 
                 facere laboriosam optio adipisci dolores aliquid est maiores fuga eum aut
                  atque recusandae vel necessitatibus accusamus! Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. Sequi incidunt fuga dolor recusandae. Neque fugit et
                   , impedit aspernatur facilis facere! Dicta ad fuga voluptas tempora omnis corporis i
                   llo aperiam a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt aliquam repellendus numquam eveniet sapiente distinctio, voluptatum sint non, sed ratione quam asperiores facere unde molestiae
                    magnam expedita vero hic!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic fuga unde iusto velit, expedita illum voluptatum quidem suscipit itaque vitae natus saepe pariatur rem totam 
                officiis dicta consequatur sed! Ipsa. Lorem, ipsum dolor sit amet
                 consectetur adipisicing elit. Fugiat minima eos, deserunt omnis iure 
                 facere laboriosam optio adipisci dolores aliquid est maiores fuga eum aut
                  atque recusandae vel necessitatibus accusamus! Lorem ipsum dolor sit amet
                   consectetur adipisicing elit. Sequi incidunt fuga dolor recusandae. Neque fugit et
                   , impedit aspernatur facilis facere! Dicta ad fuga voluptas tempora omnis corporis i
                   llo aperiam a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sunt aliquam repellendus numquam eveniet sapiente distinctio, voluptatum sint non, sed ratione quam asperiores facere unde molestiae
                    magnam expedita vero hic!</div>
            case 'Search':
                return <div className="dyn-search">Search</div>
            default:
                break;
        }
    }
    return <div className="dynamic-con">
        <Header />
        {renderContent()}
    </div>
}