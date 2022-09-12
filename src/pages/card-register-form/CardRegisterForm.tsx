import CreditCard from '../../components/credit-card/CreditCard';
import { UserProps } from '../../models/UserProps'
import './CardRegisterForm.css';
import { useAppSelector } from '../../hooks';

function CardRegisterForm (props: UserProps) {
    const creditCard = useAppSelector((state) => state).creditCard;
    const isSubmitEnabled = () => {
        return (creditCard.CardNumber && creditCard.Cvc && creditCard.Expiry);
    };
    const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(JSON.stringify(creditCard));
        alert("Input details have been logged in console.");
      };

    return (
        <div className="cardRegisterForm">
            <h2 className="title">Register card form</h2>
            <hr/>
            <div className="welcome">Welcome {props.FirstName}</div>
            <CreditCard/>
            <button className={isSubmitEnabled() ? 'submit' : 'submit disabled'} disabled={!isSubmitEnabled()} onClick={submitHandler}>Submit</button> 
        </div>
    );
}

export default CardRegisterForm;