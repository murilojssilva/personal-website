import { useState, useEffect } from "react"
import styles from "../styles/components/About.module.css"

let countdownTimeout: NodeJS.Timeout;

export function About() {
	const [isActive, setIsActive] = useState(1)
	useEffect(() => {
		setTimeout(() => {
			if (isActive <= 3) {
				setIsActive(isActive + 1)
			}
			else {
				clearTimeout(countdownTimeout);
				setIsActive(1)
			}
		}, 3000)
	}, [isActive])
	return (
		<div className={styles.aboutContainer}>
			<section>
				<h1>Murilo Silva</h1>
				<p>Desenvolvedor:</p>
				<p>
					{isActive === 1 ? "ReactJS" :
						isActive === 2 ? "NodeJS" :
							isActive === 3 ? "NextJS" :
								isActive === 4 ? "React Native" :
									null
					}
				</p>
			</section>
			<section>
				<img src="/icons/web-development.svg" alt="Web development" />
			</section>
		</div>
	)
}