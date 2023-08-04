import Head from "next/head";
import {ThemeProvider, CssBaseline} from '@mui/material';
import theme from "@/themes";

const MainLayout = ({children, title = 'Test Vercel'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="intial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
