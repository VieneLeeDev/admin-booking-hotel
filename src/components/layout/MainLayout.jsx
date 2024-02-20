import Header from "../header/Header"
import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

const MainLayout = () => {
	return (<section className="h-screen box-border">
		<Header />
		<section className="flex h-heightContent">
			<Navbar />
			<section className="flex items-center justify-center w-full font-bold bg-slate-500">
				content
			</section>
		</section>
		<Footer />
	</section>)
}

export default MainLayout