import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import { SkillTest } from '../SkillTest/SkillTest'
import classes from './Main.module.css'
/////charo taraf hai mere hi charche bas mai aur tumhi toh ho
export const Main = () => {
  return (
    <div className={classes.main}>
        <Sidebar />
        <SkillTest />
    </div>
  )
}
