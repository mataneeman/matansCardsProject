import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './routes/Router';
import Layout from './layout/Layout';
import UserProvider from './users/providers/UserProvider';
import CustumeThemeProvider from './providers/CustumThemeProvider';
import SnackbarProviders from './providers/SnackbarProvider';

function App() {
  return (
   <BrowserRouter>
      <UserProvider>
         <CustumeThemeProvider>
          <SnackbarProviders>
            <Layout>
              <Router/>
            </Layout>
           </SnackbarProviders>        
        </CustumeThemeProvider>
      </UserProvider>
   </BrowserRouter>
  )
}

export default App;
