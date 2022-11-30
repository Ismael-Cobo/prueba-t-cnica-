import { Card } from "../Card/Card"

import { BreakingBadInt } from '../../interfaces/BreakingBadInt';
import './cards.css'
import { FC } from "react";

type Props = {
    characters: BreakingBadInt[]
}

export const Cards: FC<Props> = ({ characters }: Props) => {
    return (
        <div className="cards">
            {
                characters.map(character => (
                    <Card key={character.char_id} {...character} />
                ))
            }
        </div>
    )
}
