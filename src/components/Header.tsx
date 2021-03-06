import styles from "../styles/components/Header.module.css"

export function Header() {
	return (
		<div className={styles.headerContainer}>
			<div>
				<h1>Murilo <span>Silva</span></h1>
			</div>
			<nav>
				<ul>
					<li><a href="">Sobre</a></li>
					<li><a href="">Projetos Relevantes</a></li>
					<li><a href="">Contato</a></li>
				</ul>
			</nav>
		</div>
	)
}