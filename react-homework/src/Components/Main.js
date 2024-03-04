import React from 'react'

export default function Main() {
    const products = [
        { id: 1, name: 'Яблоко' },
        { id: 2, name: 'Банан' },
        { id: 3, name: 'Вишня' },
        { id: 4, name: 'Морковь' }
    ];

    return (
        <div>
            {products.filter(product => product.id % 2 === 0).map(product => (
                <p className={product.name === 'Банан' ? 'banana' : ''} key={product.id}>
                    {product.name}
                </p>
            ))}
        </div>
    )
}
