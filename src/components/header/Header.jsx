import classNames from "classnames";
import styles from '@/components/header/Header.module.css';

export default function Header({ headerTitle }) {
    return (
        <header className={classNames(styles.header, 'container')}>
            <div className={classNames(styles.headerContent, 'subcontainer')}>
                <h1>{ headerTitle }</h1>
            </div>
        </header>
    );
}