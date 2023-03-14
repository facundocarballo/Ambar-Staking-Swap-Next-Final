import { AmbarProvider } from '@/src/context';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/styles/theme';

export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
      <AmbarProvider>
        <Component {...pageProps} />
      </AmbarProvider>
    </ChakraProvider>
}
