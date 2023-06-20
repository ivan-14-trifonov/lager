import React from "react"
import "./index.css"

export const Description = () => {
	return (
		<div className="description">
			<section className="description__content">
				{/*<div className="description__circle"></div>*/}
				<div className="description__title">
					<h2>Путь к жизни</h2>
				</div>
				<div className="description__announce">
					<div className="description__Bible_Quote">
						<p>«Я есмь путь и истина и жизнь»</p>
					</div>
					<div className="description__Biblical_Reference">
						<p>Ев. от Иоан. 14:6</p>
					</div>
					<div className="description__text">
						<p>Лагерь расположен в красивом и уютном месте на берегу озера. На протяжении трех дней мы будем говорить о том, где единственный, правильный, а главное благословенный и прекрасный путь, в чем на самом деле заключается истина и как наладить личную жизнь.</p>
					</div>
					<div className="description__chapter">
						<h3>Распорядок</h3>
					</div>
					<div className="description__text">
						<p>Мы постарались спланировать время максимально комфортно.</p>
						<ul>
							<li className="description__li">В первой половине дня будет время для общения, на котором братья постараются раскрыть тему дня.</li>
							<li className="description__li">Во второй половине будет выделено время для тематических бесед.</li>
							<li className="description__li">Конечно же будет свободное время, во время которого будут предложены как подвижные, так и настольные игры.</li>
							<li className="description__li">Во второй половине дня будет работать буфет, где можно будет что-то взять безвозмездно, а что-то за минимальную оплату (мороженое, кофе и т.д.).</li>
							<li className="description__li">После обеда будет большой перерыв, во время которого можно будет искупаться в озере, а также всем желающим будут предложены семинары по интересам («Финансовая грамотность», «Личное благовестие» и другие).</li>
							<li className="description__li">Заканчиваться день будет традиционным общением у костра, где будет возможность получить ответы на волнующие вопросы, подискутировать, послушать что-то интересное, а также поучаствовать в интерактиве. На протяжении всего лагеря там будут присутствовать несколько служителей и всегда можно будет подойти к ним для личной беседы и молитвы!</li>
						</ul>
					</div>
					<div className="description__chapter">
						<h3>Участники лагеря</h3>
					</div>
					<div className="description__text">
						<p>В наших общениях будут принимать участие:</p>
						<ul>
							<li className="description__li">служители наших церквей Тульской и Калужской областей,</li>
							<li className="description__li">а также братья гости: Сергей Зинченко и Михаил Голубин.</li>
						</ul>
					</div>
					<div className="description__text">
						<p><b>Ответственный за лагерь: Шкаровский Георгий, +7 920 275 1508.</b></p>
					</div>
					<div className="description__price">
						<p><b>С собой необходимо привезти 2300 ₽.</b></p>
					</div>
				</div>
			</section>
		</div>
		)
}