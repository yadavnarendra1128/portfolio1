// import { useState } from 'react';
import Project from './Project'

const Projects = () => {
  const projectArr = ([
    {
      title: "ShoppingWebsite",
      img: "/projects/e-commerce.png",
      desc: "Shopping Website for clothing and accessories. Developed a full-featured e-commerce platform with an admin panel",
      tags: ["react", "mongodb", "express","zustand"],
      source: "#",
      link: "https://fullstackchatapp-m9x1.onrender.com/",
    },
    {
      title: "ChatApp",
      img: "/projects/chat.png",
      desc: "A real-time chat application built with React, Express, and Socket.io. Enables seamless communication with live message updates.",
      tags: ["socket.io", "react", "express", "mongodb"],
      source: "#",
      link: "https://fullstackchatapp-m9x1.onrender.com/",
    },
    {
      title: "Job Portal",
      img: "/projects/jobPortal.png",
      desc: "A real-time chat application built with React, Express, and Socket.io. Enables seamless communication with live message updates.",
      tags: ["react", "express", "mongodb", "redux"],
      source: "#",
      link: "https://fullstackchatapp-m9x1.onrender.com/",
    },
    {
      title: "Twitter",
      img: "/projects/twitter.png",
      desc: "A Twitter clone with features like posting, liking, and following users. Built using React, Express, MongoDB, Redux, and Tailwind CSS.",
      tags: ["react", "express", "mongodb", "tailwind", "redux"],
      source: "https://github.com/yadavnarendra1128/twitterMiniProject",
      link: "https://twitterminiproject-1.onrender.com/",
    },
    {
      title: "Brainly",
      img: "/projects/brainly.png",
      desc: "A Q&A platform similar to Brainly, built with TypeScript, React, Express, MongoDB, and Tailwind CSS. Users can ask and answer questions interactively.",
      tags: ["typescript", "react", "express", "mongodb", "tailwind"],
      source: "https://github.com/yadavnarendra1128/brainly",
      link: "https://brainly1.onrender.com/",
    },
    {
      title: "Movies",
      img: "/projects/movie.png",
      desc: "A movie search and listing app that fetches data from an API. Users can explore movies, view details, and filter results using Redux state management.",
      tags: ["typescript", "react", "express", "mongodb", "tailwind", "redux"],
      source: "https://github.com/Narendra1128/MovieAppReact",
      link: "https://movie-app-react-alpha-rosy.vercel.app/",
    },
  ]);

  return (
    projectArr.map((proj,index)=>{
        return (
          <Project info={proj} key={index}/>
        )
  
    })
  )
}

export default Projects