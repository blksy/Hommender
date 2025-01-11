import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router/routes";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
