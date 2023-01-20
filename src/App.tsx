import React from 'react'
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import routes from "~/comp/routes";
import {QueryCache, QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log('onError', error);
    },
    onSuccess: (data) => {
      console.log('onSuccess', data);
    }
  })
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>,
)
