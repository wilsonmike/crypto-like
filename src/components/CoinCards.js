import React, { useState } from 'react'
import DatingCard from 'react-tinder-card'
import './CoinCards.css'

const CoinCards = () => {
    const [coins, setCoin] = useState([
        {name: "Bitcoin", imgUrl: ""},
        {name: "Ethereum", imgUrl: ""},
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving", nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!!");
    }

    return (
        <div className="datingCards">
            <div className="datingCards__container">
                {coins.map((coin) => (
                <DatingCard
                    className="swipe"
                    key={coin.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, coin.name)}
                    onCardLeftScreen={() => outOfFrame(coin.name)} >
            <div style={{ backgroundImage: `url(${coin.imgUrl})`}} className="card">
                <h3>{coin.name}</h3>
            </div>
                </DatingCard>
            ))}
            </div>
        </div>
    )
}

export default CoinCards
