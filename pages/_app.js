// MODULES //
import { useEffect } from "react";
import Script from "next/script";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import "../src/styles/globals/globals.scss";

/** App Page */
function MyApp({ Component, pageProps }) {
	return(
    <>
		 <Component {...pageProps} />
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-XQ1H1T1FWC"></script>
    <Script>
	{`
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-XQ1H1T1FWC');
		`}
    </Script>
	</>
	);
}

export default MyApp;
