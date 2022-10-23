import {useState} from 'react';

function SushiWalletForm({addToBudget}){
    const [topUpValue, setTopUpValue] = useState(0); //set up controlled form

    function handleChange(event){
        setTopUpValue(event.target.value);
    }

    function onWalletTopUp(event){
        event.preventDefault();
        addToBudget(parseInt(topUpValue));
    }

    return(
        <form onSubmit={onWalletTopUp}>
            <label htmlFor="wallet">
                Top up your wallet
                <input type="number" name="wallet" value={topUpValue} onChange={handleChange}></input>
            </label>
            <button type="submit">Confirm</button>
        </form>
    )
}

export default SushiWalletForm;