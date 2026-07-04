/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Home from "./Components/home";
import Services from "./Components/services";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./Components/navbar";
import Consumer from "./Components/consumer";
import About from "./Components/about";
import SignInSide from "./Components/SignInWithSupaBase";
import SignUpSide from "./Components/SignUpWithSupaBase";
import Payment from "./Components/payment";
import Grains from "./Components/grains";
import Vegetables from "./Components/vegetable";
import Fruits from "./Components/fruits";
import Spices from "./Components/spices";
import Nuts from "./Components/nuts";
import AddCart from "./Components/addCart";
import Weather from "./Components/weather";
import Farmer from "./Components/farmer";
import ForgetPassword from "./Components/forgetPassword";
import UpdatePassword from "./Components/updatePassword";
import Translate from "./Components/translate";

const App = () => {
  const [cart, setCart] = useState([]);

  // FIX: compare by item.id instead of object reference (indexOf fails for re-fetched objects)
  const handleClick = (item) => {
    if (cart.some((c) => c.id === item.id)) return;
    setCart([...cart, { ...item, amount: 1 }]);
  };

  const handleChange = (item, d) => {
    const ind = cart.findIndex((c) => c.id === item.id);
    if (ind === -1) return;
    const arr = [...cart];
    arr[ind] = { ...arr[ind], amount: Math.max(1, arr[ind].amount + d) };
    setCart(arr);
  };

  useEffect(() => {
    // cart updated
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar>
            <Translate />
          </Navbar>
          <Outlet />
        </>
      ),

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/consumer",
          element: <Consumer />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/weather",
          element: <Weather />,
        },
        {
          path: "/signin",
          element: <SignInSide />,
        },
        {
          path: "/signup",
          element: <SignUpSide />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/payment",
          element: <Payment />,
        },

        {
          path: "/grains",
          element: <Grains handleClick={handleClick} />,
        },
        {
          path: "/vegetables",
          element: <Vegetables handleClick={handleClick} />,
        },
        {
          path: "/fruits",
          element: <Fruits handleClick={handleClick} />,
        },
        {
          path: "/spices",
          element: <Spices handleClick={handleClick} />,
        },
        {
          path: "/nuts",
          element: <Nuts handleClick={handleClick} />,
        },
        {
          path: "/mycart",
          element: 
            <AddCart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
        },
        {
          path: "/farmer",
          element: <Farmer />,
        },
        {
          path: "/forgetPassword",
          element: <ForgetPassword />,
        },
        {
          path: "/updatePassword",
          element: <UpdatePassword />,
        },
      ],
    },
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </React.Fragment>
  );
};

export default App;

// const App = () => {

//   const [cart, setCart] = useState([]);

//   const handleClick = (item) => {
//     if (cart.indexOf(item) !== -1) return;
//     setCart([...cart, item]);
//     console.log(cart);
//   };

//   const handleChange = (item, d) => {
//     const ind = cart.indexOf(item);
//     const arr = cart;
//     arr[ind].amount += d;
//     if (arr[ind].amount === 0) arr[ind].amount = 1;
//     console.log(arr[ind].amount);
//     setCart([...arr]);
//   };

//   useEffect(() => {
//     console.log("cart change");
//   }, [cart]);

//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/grains" element={<Grains handleClick={handleClick} />}></Route>
//         <Route path="/vegetables" element={<Vegetables handleClick={handleClick} />}></Route>
//         <Route path="/fruits" element={<Fruits handleClick={handleClick} />}></Route>
//         <Route path="/spices" element={<Spices handleClick={handleClick} />}></Route>
//         <Route path="/nuts" element={<Nuts handleClick={handleClick} />}></Route>
//         <Route path="/mycart" element={<AddCart cart={cart} setCart={setCart} handleChange={handleChange}/>}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path='/consumer' element={<Consumer />}></Route>
//         <Route path='/signin' element={<SignInSide />}></Route>
//         <Route path='/signup' element={<SignUpSide />}></Route>
//         <Route path='/services' element={<Services />}></Route>
//         <Route path='/payment' element={<Payment />}></Route>
//         <Route path='/weather' element={<Weather />}></Route>
//         <Route path='/farmer' element={<Farmer />}></Route>
//       </Routes>
//     </div>
//   );
// }
