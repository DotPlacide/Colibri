import React from 'react'
import QuoatationForm from '../components/QuotationForm'
import './Arrangement.css'
const Quotation = () => {
    return (
        <div>
            <div className="Quotation">
                <h1>Ask for a Quotation</h1>
                <h5>Interested? Provide your information below and we will reach out!</h5>
                <span>(information you provide is for internal use only and will be treated with confidentiality)</span>
            </div>
            <div>
            <QuoatationForm/>
            </div>
        </div>

    )
};
export default Quotation