import styles from "../styles/components/Apresentation.module.css"

export function Apresentation() {
	return (
		<div id="apresentation" className={styles.apresentationContainer}>
			<div className={styles.apresentationContent}>
				<h1>Deseja colocar em prática seus projetos?</h1>
				<p>Posso lhe ajudar! Veja meu portfolio e entre em contato agora!</p>
			</div>
		</div>
	)
}