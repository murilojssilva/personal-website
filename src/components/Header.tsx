import styles from "../styles/components/Header.module.css"

export function Header() {
	return (
		<div className={styles.headerContainer}>
			<div>
				<h1>Murilo <span>Silva</span></h1>
			</div>
			<nav>
				<ul>
					<li>Sobre</li>
					<li>Projetos Relevantes</li>
					<li>Contato</li>
				</ul>
			</nav>
		</div>
	)
}