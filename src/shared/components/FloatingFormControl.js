import {
  ChakraProvider,
  FormControl,
  extendTheme,
  Box,
} from '@chakra-ui/react';

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
  zIndex: 2,
};

export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: '2',
              opacity: 1,
              position: 'absolute',
              backgroundColor: { useSystemColorMode: true },
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
            },
          },
        },
      },
    },
  },
});

export default function FloatingFormControl({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <Box p={3}>
        <FormControl mt={4} variant="floating">
          {children}
        </FormControl>
      </Box>
    </ChakraProvider>
  );
}