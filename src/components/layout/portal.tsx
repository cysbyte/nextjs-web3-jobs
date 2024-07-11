'use client'

import React, { useEffect, useState, ReactNode } from "react"
import { createPortal } from "react-dom"

interface IPortal{
   children: ReactNode
   elementId: string
}

const Portal = ({ children, elementId }:IPortal) => {
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])

   return mounted ? createPortal(children, document.querySelector(elementId) as Element): null
}

export default React.memo(Portal)