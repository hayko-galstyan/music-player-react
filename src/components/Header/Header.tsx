import styles from './style.module.css';
import AddAllButton from '../AddAllButton';
import PlayAllButton from '../PlayAllButton';
import TrackButton from '../TrackButton';
import Filter from '../Filter';
const Header = () => {
    return(
        <header className={styles.header} >
            <div className={styles.navItem}>
                <PlayAllButton/>
                <AddAllButton/>
            </div>
            <div className={styles.navItem}>
                <TrackButton/>
                <Filter/>
            </div>
        </header>
    )
}
export default Header;