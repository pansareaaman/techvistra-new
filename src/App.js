import logo from './logo.svg';
import './App.css';
import '@mantine/core/styles.css';
import { Button, createTheme, MantineProvider } from '@mantine/core';
import AppRoutes from './Pages/AppRoutes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated } from '@react-spring/web';
import { Provider } from 'react-redux';
import store from './Store';
import { Notifications } from '@mantine/notifications';


const theme = createTheme({
  focusRing:"never",
  fontFamily:"Poopins,sans-serif",
  primaryColor:'brightSun',
  primaryShade:4,
  colors:{
    //Dark Mode
    // 'mineShaft': 
    // ['#f6f6f6','#e7e7e7','#d1d1d1','#b0b0b0','#888888','#6d6d6d','#5d5d5d','#4f4f4f','#454545','#3d3d3d','#2d2d2d',],
    // 'brightSun':
    // ['#fffbeb','#fff3c6','#ffe588','#ffd149','#ffbd20','#f99b07','#dd7302','#b75006','#943c0c','#7a330d','#461902',],

    //Light Mode
    'mineShaft': ['#f5f7fa', '#eaeff4', '#cfdce8', '#a6bfd3','#759cbb', '#5480a3', '#416788','#35526f', '#2f475d', '#2c3e50', '#1d2834'],
    'brightSun': [ '#f1fcf5', '#defaea', '#bef4d4','#8beab2','#52d689','#27ae60', '#1d9c53', '#1a7b43', '#1a6139','#175031', '#072c18'],
  
  },
  fontFamily:"Outfit,sans-serif,Poppins"
})

function App() {
  return (
    <Provider store={store}>
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
    <Notifications className='fixed' limit={2} position="center" zIndex={1200} />
 

      <AppRoutes />
      <FontAwesomeIcon />
    
    </MantineProvider>
    </Provider>
      
  );
}

export default App;
