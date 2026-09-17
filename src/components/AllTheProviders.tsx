import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";

import { router } from "../router/routes";
import ErrorBoundary from "./ErrorBoundary";
import { UserProvider } from "../context/UserProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0 },
  },
});

export const AllTheProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <UserProvider>
          <Toaster />
          <RouterProvider router={router} />
          {children}
        </UserProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};
