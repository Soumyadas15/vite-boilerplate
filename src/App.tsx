import './App.css';
import { ThemeProvider } from './providers/theme-provider';
import { Testpage } from './pages/test-page';
import { ModalProvider } from './providers/modal-provider';
import { Navbar } from './components/navbar/navbar';
import { Sidebar } from './components/sidebar/sidebar';
import { MobileSidebar } from './components/sidebar/sidebar-mobile';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className='block lg:hidden'>
        <MobileSidebar/>
      </div>
      <div className='h-screen flex flex-col w-full'>
          <div className="h-[10%] w-full">
            <Navbar/>
          </div>

          <div className="h-[90%] w-full flex">

            <div className='lg:w-[15%] f-full'>
              <Sidebar/>
            </div>


            <div className='w-full h-full flex items-center justify-center'>
              <Testpage/>
            </div>


          </div>


        <ModalProvider/>
      </div>
    </ThemeProvider>
  );
}

export default App;
