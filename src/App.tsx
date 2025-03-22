import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router/routes";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";
import ErrorBoundary from "./components/ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <UserProvider>
          <Toaster />
          <RouterProvider router={router} />
        </UserProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
export default App;
