import './Home.css'; // Asegúrate de crear el archivo Home.css para los estilos

export const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to GitHub Explorer</h1>
        <p>Your gateway to discovering amazing projects and collaborating with developers worldwide.</p>
        <a href="https://github.com/wcabrera-2022060" target="_blank" rel="noopener noreferrer" className="hero-button">
          Explore GitHub
        </a>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Discover Repositories</h2>
          <p>Find and contribute to the best repositories in the open-source community.</p>
        </div>
        <div className="feature">
          <h2>Collaborate with Others</h2>
          <p>Work together with developers from around the world on innovative projects.</p>
        </div>
        <div className="feature">
          <h2>Showcase Your Work</h2>
          <p>Create a portfolio of your best projects and share them with potential employers.</p>
        </div>
      </section>
    </div>
  )
}
