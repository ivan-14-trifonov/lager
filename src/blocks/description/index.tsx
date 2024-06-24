import React from "react"
import "./index.css"

export const Description = () => {
	return (
		<div className="description">
			<section className="description__content">
				{/*<div className="description__circle"></div>*/}
				<div className="description__title">
					<h2>Нарисованный Бог</h2>
				</div>
				<div className="description__announce">
					<div className="description__text">
						<p>Знаешь ли ты, дорогой друг, истинного Бога? Или ты живёшь в иллюзии, которую ты сам себе нарисовал?</p>
					</div>
					<div className="description__text">
					    <p>Мы предлагаем несколько дней посвятить тому, чтобы вместе всмотреться в то, каким же открывает нам Бога Библия.</p>
					</div>
					<div className="description__chapter">
						<h3>Немного о том, что будет в лагере</h3>
					</div>
					<div className="description__text">
						<p>Раскрывать тему и делиться словом будут братья служители наших церквей и гости. Также вас ждут:</p>
						<ul>
							<li className="description__li">интересные рубрики,</li>
							<li className="description__li">много общения,</li>
							<li className="description__li">игры и спортивные мероприятия,</li>
							<li className="description__li">зона кафе, где вы сможете вкусно перекусить или найти себе хорошего собеседника,</li>
							<li className="description__li">вечерний костёр,</li>
							<li className="description__li">и многое другое.</li>
						</ul>
						<p>На протяжении всего лагеря будут присутствовать несколько служителей, и всегда можно будет подойти к ним для личной беседы и молитвы!</p>
					</div>
					<div className="description__chapter">
						<h3>Участники лагеря</h3>
					</div>
					<div className="description__text">
						<p>В наших общениях будут принимать участие:</p>
						<ul>
							<li className="description__li">служители наших церквей Тульской и Калужской областей,</li>
							<li className="description__li">а также братья гости: <span className="nowrap">Марк Хорев</span> и <span className="nowrap">Павел Мещерин</span>.</li>
						</ul>
						<div className="description__img_container">
							<img className="description__photo" src={require('./public/1.png')}/>
						    <img className="description__photo" src={require('./public/2.png')}/>
						</div>
					</div>
					<div className="description__text">
						<p><b>Ответственный за лагерь: Шкаровский Георгий, <span className="nowrap">+7 920 275 15 08.</span></b></p>
					</div>
					<div className="description__price">
						<p><b>С собой необходимо привезти <span className="nowrap">2500 ₽.</span></b></p>
					</div>
				</div>
			</section>
		</div>
		)
}