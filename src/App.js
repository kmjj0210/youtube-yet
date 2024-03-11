import './App.css';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import VideoSearch from './componets/VideoSearch';

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <VideoSearch />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <Outlet/>
      </QueryClientProvider>
    </>
  );
}

