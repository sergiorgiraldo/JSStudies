import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src="/images/site/srg.jpg"
					alt="An image showing Sergio"
					width={300}
					height={300}
				/>
			</div>
			<h1>Hi, I'm Sergio</h1>
			<p>
				I blog about whatever I want to. Husband & Father first, geek,
				physicist, programmer, super heroes addicted.
			</p>
		</section>
	);
}

export default Hero;
