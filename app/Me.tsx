const Me = () => (
    <section id="apropos" className="p-10 ">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">À Propos de Moi</h2>

            <div className="md:flex md:space-x-6">
                {/* Colonne des Technologies Maîtrisées */}
                <div className="md:w-1/2 mb-6 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Technologies Maîtrisées</h3>
                    <div className="flex flex-wrap gap-4">
                        <span className="bg-violet-700 text-white px-4 py-1 rounded-full">PHP (Laravel)</span>
                        <span className="bg-green-500 text-white px-4 py-1 rounded-full">Python</span>
                        <span className="bg-red-500 text-white px-4 py-1 rounded-full">React.js</span>
                        <span className="bg-yellow-500 text-white px-4 py-1 rounded-full">HTML/CSS</span>

                    </div>
                </div>

                {/* Colonne de la Biographie */}
                <div className="md:w-1/2">
                    <h3 className="text-xl  font-semibold mb-4">Biographie</h3>
                    <p className="text-justify">
                        Etudiant en troisième année de B.U.T Informatique, je suis développeur web Full-Stack. J'ai depuis développé plusieurs projets personnels et professionnels. Je vous invite à les découvrir
                    </p>
                    {/* Vous pouvez continuer votre biographie ou ajouter d'autres éléments ici */}
                </div>
            </div>
        </div>
    </section>
);
export default Me;
