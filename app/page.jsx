import Feed from "@compnents/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share
      <br className="max-md:hidden"/>
      <span className="main_gradient text-center">AI-powered Prompts</span>
      </h1>
      <p className="desc text-center">Open-source AI prompting platform for modern world, to discover, create, and share AI prompts.</p>
      <Feed />
    </section>
  )
}

export default Home