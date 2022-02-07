import React, { useEffect, useState } from 'react';

import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { LData } from './link-data';

import classes from '../../styles/_Header.module.scss'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize ({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        };
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen])

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <a href='/' className={classes.header__content__logo}>
                    <h2 >Artur Adamik</h2>
                    <p>Frontend developer</p>
                </a>
                <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>
                    <ul>
                        {LData.map(item => {
                            return (
                                <li>
                                    <a href={item.href} onClick={menuToggleHandler}>{item.text}</a>
                                </li>
                            )})}
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
                {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler}/>}
                </div>
            </div>
        </header>
    );
};