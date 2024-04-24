import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Newsletter from "../components/newsletter/newsletter";
import CartContextProvider from "../contexts/cartContextProvider";
import NavContextProvider from "../contexts/navContextProvider";

interface LayoutProps {
    children: JSX.Element;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <NavContextProvider>
            <CartContextProvider>
                <Navbar />
                {children}
                <Newsletter />
                <Footer />
            </CartContextProvider>
        </NavContextProvider>
    );
};

export default Layout;