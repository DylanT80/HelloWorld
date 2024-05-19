import "./styles.css"
import { Card } from "../../components";

const SI = () => {
    return (
        <div className="main-container">
            <div className="main-card-container">
                <div>
                    <Card>
                        <h1>Electric Guitar!</h1>
                        <div className="text-container">
                            <p>
                                Recently got into it, so I dont have a lot of knowledge, but did you know there are different types of electric guitars?
                            </p>
                        </div>
                    </Card> 
                </div>
            </div>

            <div className="content-container">
                    <div className="cards-container">
                        <Card>
                            <h1>Telecaster</h1>
                            <div className='img-container'>
                                <img src='./Tele.jpeg' className='image'/>      {/* src automatically goes to public folder */}
                            </div>
                            <div className="text-container">
                                <p>
                                    The classic.
                                </p>
                            </div>
                        </Card>

                        <Card>
                            <h1>Stratocaster</h1>
                            <div className='img-container'>
                                <img src='./strat.jpeg' className='image'/>      {/* src automatically goes to public folder */}
                            </div>
                            <div className="text-container">
                                <p>
                                    The bang.
                                </p>
                            </div>
                        </Card>

                        <Card>
                            <h1>Les Paul</h1>
                            <div className='img-container'>
                                <img src='./LP.jpeg' className='image'/>      {/* src automatically goes to public folder */}
                            </div>
                            <div className="text-container">
                                <p>
                                    The iconic.
                                </p>
                            </div>
                        </Card>
                    </div>
            </div>
        </div>
    )
};

export default SI;