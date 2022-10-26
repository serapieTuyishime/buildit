import Footer from "./Layout/Footer";
import Navigation from "./Layout/Navigation";

export default function Layout({ children }) {
    return (
        <div className="content">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}
