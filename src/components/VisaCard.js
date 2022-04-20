import './VisaCard.css'

import CardHeader from './CardHeader'
import CardNumber from './CardNumber'
import CardData from './CardData'
function VisaCard() {
	return (
		<div className='card'>
			<CardHeader />
			<CardNumber />
			<CardData/>
		</div>
	)
}

export default VisaCard
