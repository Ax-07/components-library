import { NavLink } from "react-router-dom";
import { SocialNav } from "../../components/navigation/socialNav/SocialNav";
import { Navbar } from "../../components/navigation/navbar/Navbar";

export const Header = () => {
    return (
        <header className="header">
            <Navbar />
            <SocialNav />
        </header>
    );
};
