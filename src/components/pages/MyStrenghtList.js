import React, { useState } from 'react'
import Strenght from '../reusable-ui/Strenght';
import { fakeStrenghts } from '../../fakeData/fakeStrenght';

const MyStrenghtList = () => {

    const [strenghts, setStrenght] = useState(fakeStrenghts);
    return (
        <div>
            <h1>MyStrenghtList</h1>
            <div>
                {
                    strenghts.map(({ id, title }) => (
                        <Strenght key={id} title={title} />
                    )
                    )
                }
            </div>
        </div>
    )
}

export default MyStrenghtList