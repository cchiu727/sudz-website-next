import classNames from "classnames";
import styles from '@/components/header/Header.module.css';

export default function Header({ headerTitle }) {
    return (
        <header>
            <h1><strong>{ headerTitle }</strong></h1>
        </header>
    );
}