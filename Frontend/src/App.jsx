import { Navigation } from "./routes/Navigation";
import { AuthProvider } from "./context/AuthContext";

function App() {

  return (
    <AuthProvider>
      <Navigation></Navigation>
    </AuthProvider>
  )
}

export default App
