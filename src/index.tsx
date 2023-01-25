import React from 'react'
import ReactDOM from "react-dom/client";
import {QueryCache, QueryClient, QueryClientProvider} from "react-query";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Application from "~/Application";
import { Provider } from 'jotai'

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
      <Provider>
      {/*<RouterProvider router={routes} />*/}
      {/*<RouterProvider router={routes} />*/}
        <Application/>
      </Provider>
      <ToastContainer/>
    </QueryClientProvider>
  </React.StrictMode>,
)
