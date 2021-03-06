import styles from "../styles/components/Contact.module.css"

export function Contact() {
	return (
		<div className={styles.contactContainer}>
			<h1>Contato</h1>
			<div className={styles.contactContent}>
				<p>Para mais informações, me envie uma mensagem através de:</p>
				<span><a target="_blank" href="https://api.whatsapp.com/send?phone=5521992687311"><img src="./icons/whatsapp.svg" alt="WhatsApp" /></a></span>
			</div>
		</div>
	)
}