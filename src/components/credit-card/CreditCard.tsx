import './CreditCard.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCardNumber, updateCvc, updateExpiry } from '../../reducers/creditCardReducer';
import moment from 'moment';

function convertDateToLastDayOfMonth(date:Date){
    return moment(date).endOf('month').toDate();
}

function CreditCard () {
    const dispatch = useDispatch();
    const nonNumberRegex = /\D/g;
    //Card number
    const [cardNumber, setCardNumber] = useState('');
    const handleCardNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const result = event.target.value.replace(nonNumberRegex, '')
                                         .replace(/(.{4})/g, '$1 ') //add space every 4 digits
                                         .trim(); //allow backspace
        setCardNumber(result);
        dispatch(updateCardNumber(result));
    };

    //Cvc
    const [cvc, setCvc] = useState('');
    const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const result = event.target.value.replace(nonNumberRegex, '');
        setCvc(result);
        dispatch(updateCvc(result));
    };

    //Expiry date
    const [expiry, setExpiry] = useState(new Date());
    const handleExpiryChange = (selectedDate:Date) => {
        var expiryDate = convertDateToLastDayOfMonth(selectedDate);
        setExpiry(expiryDate);
        dispatch(updateExpiry(expiryDate.toISOString()));
    };
    useEffect(() => {
        //Update state for intial value
        dispatch(updateExpiry(convertDateToLastDayOfMonth(expiry).toISOString()));
    });

    return (
        <div className="creditCard">
            <div>
                <input type="text" value={cardNumber} onChange={handleCardNumberChange} maxLength={23} className="cardNumber" placeholder="Credit card number"/>
            </div>
            <div className="cardInfo">
                <input type="text" value={cvc} onChange={handleCvcChange} maxLength={4} placeholder="CVC" className="cvc"/>
                <label>Expiry</label>
                <div>
                    <DatePicker
                        selected={expiry}
                        onChange={date => handleExpiryChange(date|| new Date())}
                        minDate={new Date()}
                        dateFormat="MM/yyyy"
                        onKeyDown={(e) => {e.preventDefault();}}
                    />
                </div>
            </div>
        </div>
    );
}

export default CreditCard;