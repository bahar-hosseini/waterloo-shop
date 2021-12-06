import React from 'react'
import ItemCollection from '../Item/ItemCollection'

import './PreviewCollection.styles.scss'

const PreviewCollection = ({title,items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>
            {title.toUpperCase()}
            </h1>
                <div className='preview'>
{items
.filter((item,index)=>index<4)
.map(({ id, ...otherItemProps }) => (
          <ItemCollection key={id} {...otherItemProps} />
        ))}
                </div>
        </div>
    )
}


export default PreviewCollection
