import React, {useState} from 'react';

const useToggleText = (active = false) => {
  const [isActive, setIsActive] = useState(active)
  console.log({active})
  return [isActive, setIsActive]
}

export default useToggleText
