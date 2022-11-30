import { FC } from 'react';
import { BreakingBadInt } from '../../interfaces/BreakingBadInt';

import './card.css'


export const Card: FC<BreakingBadInt> = ({
    img,
    name,
    nickname,
    occupation,
    status
}: BreakingBadInt) => {
    return (
        <div className="card">
            <img className="card__img" src={img} alt={name} />
            <div className="card__text-container">
                <div className="card__text-header">
                    <div className="card__text-header-container">
                        <h4 className="card__text-real-name">{name}</h4>
                        <p className="card__text-nickname">{nickname}</p>
                    </div>
                    <p className={`card__text-header-status ${status === 'Deceased' || status === 'Presumed dead' ? 'dead' : 'alive'}`}>{status}</p>
                </div>
                <p className="card__text-ocupation">Ocupation</p>
                <hr />
                <ul className='ocupation-container'>
                    {occupation.map(oc => (
                        <li key={oc} className='ocupation-item'>{oc}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
