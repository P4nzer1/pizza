import { useState } from "react"

import Modal from "@/shared/ui/Modal/Modal"


function App() {
  const [isOpen,setIsOpen] = useState(false)
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  return (
    <>
      <button onClick={onOpen}>Авторизация</button>
      <Modal isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default App
