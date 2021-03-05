import styles from "../styles/components/Footer.module.css"

export function Footer() {
	return (
		<div className={styles.footerContainer}>
			<div>
				<ul>
					<li>
						<a href="https://github.com/murilojssilva"><img src="./icons/social/github.svg" alt="GitHub" /></a>
					</li>
					<li>
						<a href="https://gitlab.com/murilojssilva"><img src="./icons/social/gitlab.svg" alt="GitLab" /></a>
					</li>
					<li>
						<a href="https://linkedin.com/in/murilojssilva"><img src="./icons/social/linkedin.svg" alt="LinkedIn" /></a>
					</li>
				</ul></div>
		</div>
	)
}