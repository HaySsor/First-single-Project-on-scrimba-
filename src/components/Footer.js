import React from 'react'
import classes from './Footer.module.css'
import { FaInstagramSquare } from 'react-icons/fa';
import {AiFillTwitterSquare}  from 'react-icons/ai';
import {AiFillFacebook}  from 'react-icons/ai';
import {AiFillGithub}  from 'react-icons/ai';

function Footer() {
  return (
    <footer className={classes.footer}>
        <AiFillTwitterSquare className={classes.icon} />
        <AiFillFacebook className={classes.icon} />
        <FaInstagramSquare className={classes.icon} />
        <AiFillGithub className={classes.icon} />
    </footer>
  )
}

export default Footer