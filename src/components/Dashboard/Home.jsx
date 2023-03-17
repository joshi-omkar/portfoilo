import React from 'react'
import img from '../../assets/1.gif'


const Home = () => {
  return (
    <div>
        <header className="hero">
        <img className="hero-img" src="../../assets/1.gif"/>
        <h1 className="hero-heading">Omkar Joshi the <span className="heading-inverted"> web developer</span></h1>
    </header>

    <section className="section ow">
        <div className="container container-center">
            <h1>Technologies</h1>
            <p>I have a solid foundation in HTML5, CSS3, Git, JavaScript, NodeJS, ExpressJs, ReactJS, and Web Hosting! 💪 In addition to my technical skills, I'm an expert problem-solver 🧐, and I'm absolutely in love with the world of development! ❤️</p>
        </div>
    </section>

    <section className="section">
        <div className="container container-center">
            <h1>Projects</h1>
            <p>I like to showcase my work and thus, you can see my projects hosted online</p>
            <a className="link link-primary" href="/project.html">See Projects</a>
        </div>
    </section>

    <section className="section ow">
        <div className="container container-center">
            <h1>Blogs</h1>
            <p>I am also working on some technical and non techincal blogs. I like to document my journey of learning.</p>
            <a className="link link-secondary" href="/blogs.html">Read Blogs</a>
        </div>
    </section>
    </div>
  )
}

export default Home