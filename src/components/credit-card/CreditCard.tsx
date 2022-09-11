import './CreditCard.css';
import NumberInput from '../number-input/NumberInput';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react';

function CreditCard () {

    const [expiryDate, setExpiryDate] = useState(new Date());

    return (
        <div>
            <div className="CardNumber">
                <NumberInput />
            </div>
            <div>
                <NumberInput/>
                <DatePicker
                selected={expiryDate}
                onChange={date => setExpiryDate(date || new Date())}
                minDate={new Date()}
                dateFormat="MM/yyyy"
                />
            </div>
        </div>
    );
}

export default CreditCard;