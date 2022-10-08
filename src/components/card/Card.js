import './Card.scss'
import Button from '../button/Button'
import svg from '../../assets/clock.svg'
import { useState, useMemo} from 'react';
import { useDispatch } from 'react-redux';
import { setUserTime } from '../../slices/dataSlice';

const Card = ({item}) => {

    const [timesVisibility, setTimesVisibility] = useState(false)
    const dispatch = useDispatch()

    const setTimeHandler = (item) => {
        dispatch(setUserTime(item))
    }

    //цвет лейбла не должен меняться при последующих рендерах
    const memoStyle = useMemo(() => getRandomStyle(), [])

    const {title, description, duration, label, price, discount, src} = item
    return (
        <div className='card'>
            <div className='card-img-block'>
                <img src={src} className='card-img' alt={title}/>
                {label && <span className='card-label' style={memoStyle}>{label.name}</span>}
            </div>
            <div className='card-info-block'>
                <div className='card-tags-block'>
                    <img src={svg} alt='clock' />
                    <span className='card-tag'>{duration}</span>
                </div>
                <h3 className='card-title'>{title}</h3>
                <ul className='card-description-block'>
                    {description && description.map((item, i) =>  
                        item.times ?
                            <li 
                                className='description-item'
                                key={i}
                            >
                                <span className="wrap">{item.text}: {item.data}</span>
                                <div className='card-time'>
                                    {item.times.length <= 4 && item.times.map((item, i) => 
                                            renderTimes(item, i, setTimeHandler, item)
                                        )
                                    }
                                    {item.times.length > 4 && item.times.map((item, i) => i < 3 ? 
                                        renderTimes(item, i, setTimeHandler, item)
                                        : i === 3 ? 
                                            !timesVisibility && renderTimes('еще...', i, setTimesVisibility, !timesVisibility)
                                        : ''
                                        )
                                    }
                                    {timesVisibility && 
                                        item.times.slice(3).map((item, i) => 
                                            renderTimes(item, i, setTimeHandler, item))
                                    }
                                </div>
                            </li>
                        :
                        <li 
                            className='description-item'
                            key={i}
                        >
                            <span className="wrap">{item.text}</span>
                        </li>
                    )}
                </ul>
                <div className='card-price-block'>
                    <span className='card-price'>
                        {price} &#8381;
                        {discount && <small className='card-price-discount'>{discount}</small>}
                    </span>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Card

function getRandomStyle () {
    return Math.random() > 0.5 ? 
        {backgroundColor: '#7553FF', color: '#FFF'} : 
        {backgroundColor: '#FED74B', color: '#404040'} 
}

const renderTimes = (time, i, handler, arg) => {
    return (
        <button 
            className='card-time-item' 
            key={i}
            onClick={() => handler(arg)}
        >
        {time}
        </button>
    )
}