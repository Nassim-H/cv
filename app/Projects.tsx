const Projects = () => (
    <section id="projets" className="p-10 bg-dark-100">
        <div className="container mx-auto my-10">
            <h2 className="text-3xl font-bold mb-4">Projets</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-white hover:scale-105">
                    <h2 className="text-2xl text-gray-700 font-bold mb-3">Portfolio</h2>
                    <p className="text-gray-600 mb-5">
                        Premier Portfolio développé avec l&aposaide de Bootstrap.
                    </p>
                    <a href="https://github.com/Nassim-H/Portfolio" target="_blank" className="text-blue-500 hover:text-blue-600 transition duration-300">
                        Lien GitHub &rarr;
                    </a>

                </div>

                {/* Card 2 */}
                <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-white hover:scale-105">
                    <h2 className="text-2xl text-gray-700 font-bold mb-3">L&#39;envol</h2>
                    <p className="text-gray-600 mb-5">
                        Site web réalisé avec PHP <b>pur</b> avec des requêtes à une API.
                    </p>
                    <a href="https://github.com/Nassim-H/airports" target="_blank" className="text-blue-500 hover:text-blue-600 transition duration-300">
                        Lien GitHub &rarr;
                    </a>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-white hover:scale-105">
                    <h2 className="text-2xl text-gray-700 font-bold mb-3">Blog de films</h2>
                    <p className="text-gray-600 mb-5">
                        Site développé avec Flask contenant une base de données de critiques de films
                    </p>
                    <a href="https://github.com/Nassim-H/airports" target="_blank" className="text-blue-500 hover:text-blue-600 transition duration-300">
                        Lien GitHub &rarr;
                    </a>
                </div>

            </div>
        </div>
    </section>
);
export default Projects;