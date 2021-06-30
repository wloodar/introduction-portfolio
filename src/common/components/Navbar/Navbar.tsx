import s from './Navbar.module.scss';

function Navbar () {
    return (
        <nav className={s.nav}>
            <div className="container">
                <div className={s.left}>
                    <div className={s.logo}>
                        <h5>Wlodar</h5>
                    </div>
                    <div className={s.list}>
                        <ul>
                            <li><a href="#about">O mnie</a></li>
                            <li><a href="#portfolio">Moje realizacje</a></li>
                            <li><a href="#technologies">Technologie</a></li>
                            <li><a href="#kontakt">Kontakt</a></li>
                        </ul>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.lang}>
                        <button className="btn btn-border">PL</button>
                    </div>
                    <div className={s.action}>
                        <button className="btn btn-primary-bright">Skontaktuj się</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;