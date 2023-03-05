import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children }) {
	return (
		<div className="bgImg">
            <Navbar />
            {children}
		</div>
	);
}
