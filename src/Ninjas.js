import React from 'react';
import './styles/ninjas.css';

const Ninjas = ({ninjas , deleteNinja}) => {
    const ninjaList = ninjas.filter(ninja => ninja.age > 30).map(ninja => {

        return (
            <div className="ninjas" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <div>
                    <button onClick={() => deleteNinja(ninja.id)}>Delete</button>
                </div>
                <hr />
            </div>
            )
    })
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas;