import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
    const [text, setText] = useState("");
    const [amount, SetAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };

        addTransaction(newTransaction);
    };

    return (
        <div>
            <h3>Nuova Transazione</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Text</label>
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Inserisci causale...'
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='amount'>Ammontare</label>
                    <input
                        type='number'
                        value={amount}
                        onChange={(e) => SetAmount(e.target.value)}
                        placeholder='Enter amount...'
                    />
                </div>
                <button className='btn'>Aggiungi transazione</button>
            </form>
        </div>
    );
}

export default AddTransaction;
