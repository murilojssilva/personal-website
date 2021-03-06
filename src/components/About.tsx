import { useState, useEffect } from "react"
import styles from "../styles/components/About.module.css"

let countdownTimeout: NodeJS.Timeout;

export function About() {
	const [isActive, setIsActive] = useState(1)
	useEffect(() => {
		setTimeout(() => {
			if (isActive < 4) {
				setIsActive(isActive + 1)
			}
			else {
				clearTimeout(countdownTimeout);
				setIsActive(1)
			}
		}, 2000)
	}, [isActive])
	return (
		<div id="about" className={styles.aboutContainer}>
			<section>
				<h1>Murilo Silva</h1>
				<h2>Desenvolvedor</h2>
				<h3>
					{isActive === 1 ? "ReactJS" :
						isActive === 2 ? "NodeJS" :
							isActive === 3 ? "NextJS" :
								isActive === 4 ? "React Native" :
									null
					}
				</h3>
			</section>
			<section>
				<img src="/icons/web-development.svg" alt="Web development" />
			</section>
		</div>
	)
}