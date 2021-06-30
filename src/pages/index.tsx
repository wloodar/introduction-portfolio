import s from './index.module.scss';

import Navbar from '../common/components/Navbar/Navbar';
import Footer from '../common/components/Footer/Footer';
import Contact from '../modules/contact/contact';

function Home() {
    return (
        <>
        <Navbar/>
        {/* <div className={s.box}>
            <h1>This will be a portfolio :)</h1>
        </div> */}
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home;