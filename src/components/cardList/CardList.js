import './CardList.scss'
import Card from '../card/Card'
import { useSelector } from 'react-redux'

const CardList = () => {

    const {data} = useSelector(state => state.dataReducer)

    return (
        <div className="cardList">
            {data && data.map(item => <Card key={item.id} item={item} />)}
        </div>
    )
}

export default CardList