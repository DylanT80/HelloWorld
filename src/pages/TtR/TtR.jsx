import { useState } from 'react';
import { Card, ListItem } from "../../components";
import './styles.css';

const TtR = () => {
    const [items, setItems] = useState([
        {
            id: 0,
            text: "luvdisc",
            link: "https://www.pokemon.com/us/pokedex/luvdisc"
        },
        {
            id: 1,
            text: "cresselia",
            link: "https://www.pokemon.com/us/pokedex/cresselia"
        },
        {
            id: 2,
            text: "tandemaus",
            link: "https://www.pokemon.com/us/pokedex/tandemaus"
        },
        {
            id: 3,
            text: "necrozma",
            link: "https://www.pokemon.com/us/pokedex/necrozma"
        },
        {
            id: 4,
            text: "delphox",
            link: "https://www.pokemon.com/us/pokedex/delphox"
        },
        {
            id: 5,
            text: "ceruledge",
            link: "https://www.pokemon.com/us/pokedex/ceruledge"
        },
        {
            id: 6,
            text: "dottler",
            link: "https://www.pokemon.com/us/pokedex/dottler"
        },
        {
            id: 7,
            text: "sirfetchd",
            link: "https://www.pokemon.com/us/pokedex/sirfetchd"
        },
        {
            id: 8,
            text: "applin",
            link: "https://www.pokemon.com/us/pokedex/applin"
        },
        {
            id: 9,
            text: "basculegion",
            link: "https://www.pokemon.com/us/pokedex/basculegion"
        },
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
        <div className="ttr-main-container">
            <div className='ttr-list-container'>
                <Card>
                    <h1 style={{textAlign: "center", paddingLeft: "1.5em", paddingRight: "1.5em"}}>Things to Read</h1>
                    {items.map((item, i) => <ListItem index={i} key={item.id} handleUp={handleUp} handleDown={handleDown} link={item.link}>{item.text}</ListItem>)}
                </Card>
            </div>
        </div>
    );
}

export default TtR;