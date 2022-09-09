import './CardRegistryForm.css';
import CreditCard from '../../components/credit-card/CreditCard';

function CardRegistryForm (props: { FirstName:string }) {
    return (
        <div>
            <h1>Register card form</h1>
            <hr/>
            <h2>Welcome {props.FirstName}</h2>
            <CreditCard/>
            <button>Submit</button>
        </div>
    );
}

export default CardRegistryForm;