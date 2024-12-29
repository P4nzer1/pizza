import { useState } from "react"

import Modal from "@/shared/ui/Modal/Modal"
import Input from "@/shared/ui/Input/Input"


function App() {
  const [isOpen,setIsOpen] = useState(false)
  
  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  

  return (
    <>
      <button onClick={onOpen}>Авторизация</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Input 
          type="text"
          placeholder="+7 919 818-28-27"
          id="phone"
        />
      </Modal>
    </>
  )
}

export default App
