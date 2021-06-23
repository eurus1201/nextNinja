import Navbar from "./navbar";
import Footer from "./footer";


export interface LaypotProps {
}

const Layout: React.SFC<LaypotProps> = ({ children }) => {
    return (
        <div className='content'>
            <Navbar />
            {children}
            <Footer/> 
        </div>

    );
}

export default Layout;