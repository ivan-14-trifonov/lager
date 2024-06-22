import React from "react"
import "./index.css"

export const Main = () => {
	return (
		<main className="main">
			<div className="main__background"></div>
  			<div className="main__circle"></div>
			<section className="main__content">
{/*				<div className="main__header">
					<img className="main__img" src={require('./images/logo.png')} width="200px" />
				</div>*/}
				<div className="main__title">
					<h1>Христианский молодёжный летний лагерь</h1>
				</div>
				<div className="main__info">
					<div className="main__border">
						<p>📍 Новомосковск</p>
					</div>
					<div className="main__border">
						<p>🗓 04.07 – 08.07</p>
					</div>
				</div>
			</section>
		</main>
		)
}