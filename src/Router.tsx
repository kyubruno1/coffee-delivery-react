import { Route, Routes } from "react-router-dom"
import { Checkout } from "./pages/Checkout"
import { Home } from "./pages/Home"

export function Router() {
	return (
		<Routes>
			{/* <Route path="/"> */}
			<Route path="/" element={<Home />} />
			<Route path="/checkout" element={<Checkout />} />
			{/* </Route> */}
		</Routes>
	)
}
