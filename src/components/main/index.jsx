import React from 'react';

import classes from '../../styles/_Main.module.scss'


export const Main = () => {
  return (
    <section className={classes.main}>
        <div className={classes.main__bgimage}>
            <div className={classes.main__bgimage__outer}>
                <div className={classes.main__bgimage__outer__inner}>
                    <h2 className="hero_title">Hi, it's Artur</h2>
                    <p className="hero_desc">I am a Frontend Dev</p>
                </div>
            </div>
        </div>
    </section>
    );
};

