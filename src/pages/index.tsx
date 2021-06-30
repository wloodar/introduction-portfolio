import s from './index.module.scss';

import Navbar from '../common/components/Navbar/Navbar';

function Home() {
    return (
        <>
        <Navbar/>
        <div className={s.box}>
            <h1>This will be a portfolio :)</h1>
        </div>
        </>
    )
}

export default Home;