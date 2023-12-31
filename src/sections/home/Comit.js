/* eslint-disable no-redeclare */
// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/Comit.module.scss";

// IMAGES //
import ComitImg from "../../../public/img/home/comit_mockup.png";
import Dots2 from "../../../public/img/home/dots_2.png";
import ComitLogo from "../../../public/img/home/comit-logo.svg";

/** Home Hero Section */
export default function Comit() {
	return (
		<div className={`${styles.comit} sticky_animation ptb_60`} name="comit">
			<div className="container">
				<div className={`${styles.business}`}>
					{/* <img src={Dots2.src} className={`${styles.dots} img-responsive`} /> */}
					<div className={`${styles.box}`}>
						{/* <div className={`${styles.title} section_title color_white`}>
							Our business
						</div> */}
						{/* <h4 className="pt_30 pb_20 text_lg color_white">Comit</h4> */}
						<img
							src={ComitLogo.src}
							className={`${styles.ComitLogo} img-responsive pb_30`}
						/>
						<p className="color_white">
							An app for everyone, no matter where they are in their journey to carbon
							neutrality. Comit brings carbon footprint offsetters to our platform,
							enabling them to trade multiple environmental products with ease in the
							most cost effective manner.
						</p>
						{/* <div className={`${styles.btn_section}`}>
							<p>
								<a href="#" className="text_sm color_white">
									DISCOVER MORE
								</a>
							</p>
						</div> */}
					</div>
					<div className={`${styles.box}`}>
						<img
							src={ComitImg.src}
							className={`${styles.comit_img} img-responsive`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
