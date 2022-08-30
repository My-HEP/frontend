import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import TherapistHome from './therapist/pages/TherapistHome';
import Patients from './therapist/pages/Patients';
import PatientPlan from './therapist/pages/PatientPlan';
import HEPs from './therapist/pages/HEPs';

const queryClient = new QueryClient();


Sentry.init({
  dsn: "https://ef4490b6aff1440b9b9ae1ee41afa685@o1372411.ingest.sentry.io/6677638",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorModeScript />
      <ChakraProvider theme={theme}>
        <App />
        <BrowserRouter>
          <Routes>
              <Route index path="/" element={<Login />} />
              <Route path="therapisthome" element={<TherapistHome />} />
              <Route path="patients" element={<Patients />} >
                <Route path=":patient" element={<PatientPlan />} />
              </Route>
              <Route path="heps" element={<HEPs />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
