import React from "react"
import "./index.css"

export const Coordinates = () => {
	return (
		<div className="coordinates">
			<div className="dates">
				<h2 className="text">🗓 Даты проведения лагеря</h2>
				<p className="text">29.06.2023 18:00 – заезд</p>
				<p className="text">03.07.2023 11:00 – выезд</p>
			</div>

			<div className="place">
				<h2 className="text">📍 Место проведения</h2>
				<a
					href="https://yandex.ru/maps/?ll=38.384608%2C53.866330&mode=search&sll=38.421775%2C53.916805&text=53.916805%2C38.421775&z=10"
					target="_blank"
					className="link">
				Место в Яндекс Картах ➡️
				</a>
			</div>
			<div className="map1">
				<a className="map2" href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps">
						Яндекс Карты
				</a>
      			<a
      			    className="map3"
      				href="https://yandex.ru/maps/?ll=38.384608%2C53.866330&mode=search&sll=38.421775%2C53.916805&text=53.916805%2C38.421775&z=10">
      				Место проведения лагеря — Яндекс Карты
      			</a>
      			<iframe
      			    className="map"
      				src="https://yandex.ru/map-widget/v1/-/CCUDETDrdD"

      				// https://yandex.ru/map-widget/v1/-/CCUnQYgl8D
      				// https://yandex.ru/maps/-/CCUDETDrdD

      				// frameborder="0"
      				// allowfullscreen="true"
      				>
      			</iframe>
      		</div>
		</div>
		)
}