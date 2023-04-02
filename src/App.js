import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        // {path:'portfolio',element:<Portfolio/>},
        { path: "*", element: <ErrorPage /> },
      ],
    },
    { path: "*", element: <ErrorPage /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
