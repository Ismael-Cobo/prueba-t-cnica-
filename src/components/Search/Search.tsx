
import './search.css'
import { FC, useState } from 'react';

type Props = {
    filterByName: (name: string) => void
}

export const Search: FC<Props> = ({ filterByName }: Props) => {

    const [value, setValue] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        filterByName(e.target.value)
    }

    return (
        <>
            <h2 className='search__title'>Braking Bad Wiki</h2>
            <hr />
            <div className='search__input-container'>
                <input className='search__input' type="text" value={value} onChange={handleChange} />
            </div>
        </>
    )
}
