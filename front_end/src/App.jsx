import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/molecules/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/organisms/Footer";
import Connexion from "./components/pages/Connexion";
import LoginForm from "./components/atoms/LoginForm";
import SignupForm from "./components/atoms/SignupForm";
import Product from "./components/pages/Product";
import Showproducts from "./components/pages/Showproducts";
import Account from "./components/pages/Account";
import Admin from "./components/pages/Admin";
import Cart from "./components/pages/Cart";
import Shipping from "./components/pages/Shipping";

function App() {

  return (
    <>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="grow">
          
          
            <Routes>
              {/* URL vers Home */}
              <Route path="/" element={<Home />} />

              {/* URL vers page de connexion, soit Login, soit Signup */}
              <Route path="/connexion" element={<Connexion />}>
                <Route path="login" element={<LoginForm />} />
                <Route path="signup" element={<SignupForm />} />
              </Route>

              {/* URL vers la page d'un produit */}
              <Route path="/product" element={<Product />}/>

              {/* URL vers la page des produits */}
              <Route path="/showproducts" element={<Showproducts />}/>

              {/* URL vers la page Profil */}
              <Route path="/account" element={<Account />}/>

              {/* URL vers la page Admin */}
              <Route path="/admin" element={<Admin />}/>

              {/* URL vers la page Panier */}
              <Route path="/cart" element={<Cart />}/>
               {/* URL vers la page Shipping */}
              <Route path="Shipping" element={<Shipping />}/>
            
            </Routes>
        </main>
        <Footer />
      </div>
      </Router>
    </>
  );
}

export default App;