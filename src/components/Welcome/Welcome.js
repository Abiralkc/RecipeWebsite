import {
    WelcomeContainer, 
    WelcomeContent,
    WelcomeImg, 
    WelcomeContentText,
    WelcomeContentTitle,
    WelcomeText,
    Img
} from './Welcome.styles';
import PizzaImg from '../../images/pizza.png';
const Welcome = () => {
    return (
        <div>
            <WelcomeContainer>
                <WelcomeContent>
                    <WelcomeImg>
                        <Img src={PizzaImg} alt=" Delious Pizza"/>
                    </WelcomeImg>
                    <WelcomeContentText>
                        <WelcomeContentTitle>Welcome</WelcomeContentTitle>
                        <WelcomeText>
                            Home made is a great way to make meals at home that are health and enjoyable. 
                            We have a variety of categories to choose from that help meet your needs in your health journey.
                            You can customize the ingredients you want to be added to your meal. This can be due to health 
                            resources, you don’t have to use everything on the list.
                        </WelcomeText>
                        <WelcomeText>
                            The order will be sent straight to your doorstep in less then 
                            1hr pre-packed for you in portions. 
                            Start cooking by following the visual guide in your order and serve your family a healthy meal.
                        </WelcomeText>
                    </WelcomeContentText>
                </WelcomeContent>


            </WelcomeContainer>

        </div>
    )
}

export default Welcome;