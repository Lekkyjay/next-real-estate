import React from 'react'
import { IProperty } from '../interfaces'

interface Props {
  property: IProperty
}

function Property({ property }: Props) {
  return (
    <div>Property</div>
  )
}

export default Property