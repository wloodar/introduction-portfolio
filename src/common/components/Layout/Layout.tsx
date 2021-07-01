import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import s from './Layout.module.scss';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Navbar/>

            <motion.main 
                className={s.main} 
                initial={{ opacity: 0, translateY: 14 }} 
                animate={{ opacity: 1, translateY: 0 }} 
                transition={{ ease: 'easeOut', duration: 0.5 }}
            >
                {children}
            </motion.main>

            <Footer/>
        </div>
    )
}

export default Layout;