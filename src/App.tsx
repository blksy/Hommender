import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router/routes";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster />
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  );
}
export default App;
