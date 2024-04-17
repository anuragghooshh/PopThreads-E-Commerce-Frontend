import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import Newsletter from "../components/newsletter/newsletter";

interface LayoutProps {
    children: JSX.Element; // Define children as a single React element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Newsletter/>
            <Footer />
        </div>
    );
};

export default Layout;