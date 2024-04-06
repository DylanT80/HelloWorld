import { useState } from 'react';
import { Star, Card, ListItem } from '../../components';
import './styles.css';

const Home = () => {
    const [items, setItems] = useState([
        {
            id: 0,
            text: "sunsets"
        },
        {
            id: 1,
            text: "video games"
        },
        {
            id: 2,
            text: "watching shows"
        },
        {
            id: 3,
            text: "my dog"
        }
    ]);

    const handleUp = (e) => {
        const index = e.target.id;

        if (index > 0) {
            let newItems = [...items];
            console.log(newItems);
            const swapItem = newItems[index - 1];
            newItems[index - 1] = newItems[index];
            newItems[index] = swapItem;

            setItems(newItems);
        }
    }

    const handleDown = (e) => {
        const index = e.target.id;

        if (index < items.length - 1) {
            let newItems = [...items];
            const swapItem = newItems[index - (-1)];    // Have to use - since + acts as concatenation LOL
            newItems[index - (-1)] = newItems[index];
            newItems[index] = swapItem;
            setItems(newItems);
        }
    }

    return (
        <>
            <div className='stars-container'>
                <Star x={175} y={100} size={40} />
                <Star x={900} y={100} size={25} />
                <Star x={700} y={620} size={15} />
                <Star x={1500} y={350} size={70} />
            </div>

            <div className='main-container'>
                <div className='hero-container'>
                    <div className='hero-greeting'>Hello there!</div>
                </div>

                <div className='intro-container'>
                    <Card>
                        <div className='introduction'>
                            <h1 style={{alignSelf: "center"}}>Who am I?</h1>
                            <div className='intro-text'>
                                <p>A future CS grad with a future in burger flipping!</p>
                                <p>During my own time, I like to play video games with friends and sometimes code.</p>
                                <p>I love sunsets, so I provide one to show on the right ---&gt;</p>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className='img-container'>
                            <img src='./sunset.png' className='image'/>      {/* src automatically goes to public folder */}
                        </div>
                    </Card>                   
                </div>

                <div className='list-container'>
                    <Card>
                        <h1>Things that interest me</h1>
                        <div className='list'>
                            {items.map((item, i) => <ListItem key={item.id} index={i} handleUp={handleUp} handleDown={handleDown}>{item.text}</ListItem>)}
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Home;