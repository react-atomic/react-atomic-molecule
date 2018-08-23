import React from 'react'
import Svg from './Svg'
import Path from './Path'

const base = displayName => d => {
    const Element = props =>
    <Svg {...props} data-name={displayName}>
        <Path d={d} />
    </Svg>
    Element.displayName = displayName
    return Element
}

export default base
