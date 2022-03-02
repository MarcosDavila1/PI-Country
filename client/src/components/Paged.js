import React from 'react'

function Paged({itemsPerPage, countries, paged}) {

    const pageNumber = [];

    for (let i = 0; i <= Math.ceil(countries/itemsPerPage)-1; i++) {
        pageNumber.push(i+1);
        
    }

    return (
    <nav>
        <ul>
            {
            pageNumber?.map(n =>(
                <button onClick={()=>paged(n)} key={n}>{n}</button>
            ))
            }
        </ul>
    </nav>
    )
}

export default Paged