
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main"

function App() {
  return (
    
<>
<Router>
<Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:page" element={<Main />} />
        <Route path="/ppcompressionfittings/:id" element={<Main />} />
      </Routes>
    </Router>
</>

    );
}

export default App;
  