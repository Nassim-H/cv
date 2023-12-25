const Home = () => (
    <section id="accueil" className="text-center p-10 bg-dark-200 min-h-screen flex flex-col justify-center">
        <div>
            <h1 className="text-5xl text-gray-800 dark:text-white font-bold mb-6">
                Bienvenue sur mon Portfolio !
            </h1>
            <p className="mb-4">Découvrez mes projets, compétences et plus encore...</p>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>

                </div>
            </div>
        </div>
    </section>
);
export default Home;
