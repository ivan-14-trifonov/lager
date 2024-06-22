import React from "react"
import "./index.css"

export const Coordinates = () => {
	return (
		<div className="coordinates">
			<div className="dates">
				<h2 className="text">🗓 Даты проведения лагеря</h2>
				<p className="text">04.07.2024 18:00 – заезд</p>
				<p className="text">08.07.2024 11:00 – выезд</p>
			</div>

			<div className="place">
				<h2 className="text">📍 Место проведения</h2>
				<a
					// href="https://yandex.ru/maps/?ll=38.384608%2C53.866330&mode=search&sll=38.421775%2C53.916805&text=53.916805%2C38.421775&z=10"
					// href="https://yandex.ru/maps/?pt=38.421775,53.916805&z=18&l=map"
					href="https://yandex.ru/maps/-/CCUD4RvbtA"
					target="_blank"
					className="link"
					rel="noreferrer">
				Место в Яндекс Картах ➡️
				</a>
			</div>
{/*			<div className="map1">
				<iframe
				className="map"
				title="Карта"
				rel="noreferrer"
				src="https://yandex.ru/map-widget/v1/?um=constructor%3A0527761ad143fd73b15e27a3e83db3890f6f61933be19f3b5c8a6fc116c7f5f0&amp;source=constructor"
				></iframe>
      		</div>*/}
		</div>
		)
}