import styles from "../styles/components/About.module.css"

export function About() {
	return (
		<div className={styles.aboutContainer}>
			<section>
				<h1>Sobre</h1>
				<p>Página pessoal do desenvolvedor Murilo Silva</p>
				<button>Saiba mais</button>
			</section>
			<section>
				<img src="/icons/web-development.svg" alt="Web development" />
			</section>
		</div>
	)
}