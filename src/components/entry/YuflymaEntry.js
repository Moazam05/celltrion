import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import entryImage from '../../assets/img/yuflyma-entry.jpg';

const YuflymaEntry = () => {
    return (
        <section className='entry' style={{ backgroundImage: `url(${entryImage})` }}>
            <Container>
                <div className='entry-text'>
                    <Link to="/role-selection/yuflyma" className='theme-btn'>Enroll in Co-Pay Program</Link>
                    <p className='text-1'>Commercially insured patients taking YUFLYMA<sup className="reg">&reg;</sup> may be able to receive assistance through the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program</p>
                    <h5>If eligible, patients may pay as little as $0
                        for YUFLYMA<sup className="reg">&reg;</sup>.
                    </h5>
                    <p className='text-2'>Celltrion CARES<sup>&trade;</sup> provides assistance to help with patient out-of-pocket costs
                        for YUFLYMA<sup className="reg">&reg;</sup>.</p>
                    <p className='text-3'>In order to be eligible for Celltrion CARES<sup>&trade;</sup> Co-Pay
                        Assistance, patients:
                    </p>
                    <ul>
                        <li>
                            Must have commercial insurance
                        </li>
                        <li>
                            Must not have Medicare, Medicaid,
                            or other government insurance

                        </li>
                        <li style={{ lineHeight: 1.5 }}>Must meet certain guidelines set
                            forth in the Terms and Conditions
                            for the Celltrion CARES<sup>&trade;</sup> Co-Pay Assistance Program
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default YuflymaEntry