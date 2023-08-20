import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as LiaIcons from 'react-icons/lia';
import * as MdIcons from 'react-icons/md';



export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'football',
    path: '/football',
    icon: <BiIcons.BiFootball />,
    cName: 'nav-text'
  },
  {
    title: 'cricket',
    path: '/cricket',
    icon: <BiIcons.BiCricketBall />,
    cName: 'nav-text'
  },
  {
    title: 'hockey',
    path: '/hockey',
    icon: <FaIcons.FaHockeyPuck />,
    cName: 'nav-text'
  },
  {
    title: 'tennis',
    path: '/tennis',
    icon: <LiaIcons.LiaTableTennisSolid />,
    cName: 'nav-text'
  },
  {
    title: 'kabaddi',
    path: '/kabaddi',
    icon: <MdIcons.MdSportsKabaddi />,
    cName: 'nav-text'
  },
  {
    title: 'volleyball',
    path: '/volleyball',
    icon: <MdIcons.MdSportsVolleyball />,
    cName: 'nav-text'
  }
];