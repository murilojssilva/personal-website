import styles from "../styles/components/Header.module.css"

export function Header() {
	return (
		<div className={styles.headerContainer}>
			<div>
				<h1>Murilo <span>Silva</span></h1>
			</div>
			<nav>
				<ul>
					<li><a href="#about">Sobre</a></li>
					<li><a href="#apresentation">Apresentação</a></li>
					<li><a href="#tecnologies">Tecnologias</a></li>
					<li><a href="#contact">Contato</a></li>
				</ul>
			</nav>
		</div>
	)
}