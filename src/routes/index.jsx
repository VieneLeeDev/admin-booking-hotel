import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
export const routes = createBrowserRouter([
	{	
		path:"/",
		element: <MainLayout/>,
	}
])

