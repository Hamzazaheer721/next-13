import "@/styles/globals.css"
import {
  QueryClientProvider,
  QueryClient,
  HydrationBoundary
} from "@tanstack/react-query"

import { useRef } from "react"

export default function App({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient())

  return (
    <>
      <QueryClientProvider client={queryClient.current}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  )
}
