// MODULES //

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Banner from "@/sections/home/Banner";
import WhoWeAre from "@/sections/home/WhoWeAre";
import OurBusiness from "@/sections/home/OurBusiness";
import Comit from "@/sections/home/Comit";
import What from "@/sections/home/What";
import Focus from "@/sections/home/Focus";
import Partner from "@/sections/home/Partner";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Home.module.scss";

/** Home Page */
export default function Home() {
	return (
		<div>
			<Head>
				<title>Where companies grow and the planet thrives.</title>
				<meta name="description" content="Aiming to bring efficiency, transparency and liquidity to environmental markets." />
				<meta name="og:title" content="Where companies grow and the planet thrives."/>
				<meta name="og:description" content="Aiming to bring efficiency, transparency and liquidity to environmental markets."/>
				<link rel="icon" href="/img/favicon.png" />
				<meta property="og:image" content="https://www.envex.co/img/og-image.jpg"/>
        		<meta property="og:image:secure_url" content="https://www.envex.co/img/og-image.jpg"/>
			</Head>

			<Header />
			<main className={`${styles.index_page}`}>
				<Banner />
				<WhoWeAre />
				<section className="full_sticky_animation">
					<OurBusiness />
					<Comit />
				</section>
				<What />
				<Focus />
				<Partner />
			</main>
			<Footer />
		</div>
	);
}
