import AuthForm from "@/features/auth/ui/AuthForm"

function App() {
  //TODO
  const handleAuthSubmit = (phone: string, code: string) => {
    console.log('Авторизация:', { phone, code });
    
  };

  return (
    <>
    <AuthForm onSubmit={handleAuthSubmit}></AuthForm>
    </>
  )
}

export default App
