import styles from "../styles/components/Tecnologies.module.css"

export function Tecnologies() {
	return (
		<div className={styles.tecnologiesContainer}>
			<h1>Serviços</h1>
			<div id="tecnologies" className={styles.tecnologiesContent}>
				<ul>
					<li>
						<div>
							<h2>Bancos de dados</h2>
							<img src="./icons/database.svg" alt="Banco de dados" />
							<p>Desenvolvimento de sistemas compatíveis com aplicativos web e para dispositivos móveis.</p>
						</div>
					</li>
					<li>
						<div>
							<h2>Aplicativos móveis</h2>
							<img src="./icons/smartphones.svg" alt="Aplicativos" />
							<p>Desenvolvimento de aplicativos compatíveis com dispositivos móveis com os sistemas operacionais IOS e Android.</p>
						</div>
					</li>
					<li>
						<div>
							<h2>Websites</h2>
							<img src="./icons/web.svg" alt="Websites" />
							<p>Desenvolvimento de lojas virtuais, páginas pessoais e aplicações web, com layout responsivo.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)
}