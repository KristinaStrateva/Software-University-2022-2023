import Footer from './components/Footer';
import Header from './components/Header';
import UserSection from './components/UserSection';
import './styles.css';

function App() {

    return (

        <div>
            <Header />

            <main className="main">
                <UserSection />
            </main>

            <Footer />
        </div>

    );
}

export default App
