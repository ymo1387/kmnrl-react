import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "layouts/MainLayout";
import AuthLayout from "layouts/AuthLayout";
import GuardLayout from "layouts/GuardLayout";
import HomePage from "components/HomePage";
import Collections from "components/collections/Collections";
import ProductDetail from "components/product/ProductDetail";
import LoginPage from "components/auth/LoginPage";
import RegisterPage from "components/auth/RegisterPage";
import NotFound from "errors/NotFound";
import CartMain from "components/cart/CartMain";
import Account from "components/profile/Account";
import Profile from "components/profile/Profile";
import OrderHistory from "components/profile/OrderHistory";
import Search from "components/search/Search";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Navigate to="home" />,
			},
			{
				path: "home",
				element: <HomePage />,
			},
			{
				path: "collections/:type",
				element: <Collections />,
			},
			{
				path: "collections/:type/products/:slug",
				element: <ProductDetail />,
			},
			{
				path: "search",
				element: <Search />,
			},
			{
				path: "/",
				element: <AuthLayout />,
				children: [
					{
						path: "login",
						element: <LoginPage />,
					},
					{
						path: "register",
						element: <RegisterPage />,
					},
				],
			},
			{
				path: "/",
				element: <GuardLayout />,
				children: [
					{
						path: "/",
						element: <Profile />,
						children: [
							{
								path: "account",
								element: <Account />,
							},
							{
								path: "order-history",
								element: <OrderHistory />,
							},
						],
					},
					{
						path: "cart",
						element: <CartMain />,
					},
				],
			},
			{
				path: "notfound",
				element: <NotFound />,
			},
			{
				path: "*",
				element: <Navigate to="/notfound" />,
			},
		],
	},
]);

export default router;
