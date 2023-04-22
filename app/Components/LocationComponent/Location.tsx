import React from 'react'
import LinkIcon from '../LinkIconComponent/LinkIcon'
import Image from 'next/image'

function Location({classname}:{classname:string}) {
  return (
    <Image src="/icons/location.svg" width={30} height={30} alt='' />
  )
}

export default Location