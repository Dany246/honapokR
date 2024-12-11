export const Honapkartyak = () => {
  const honapok = [
    {
      name: "Szeptember",
      evszak: "osz",
      photoUrl: "./img/szeptember.jpg",
      leiras: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Október",
      evszak: "osz",
      photoUrl: "./img/oktober.jpg",
      leiras: "In sodales lobortis venenatis.",
    },
    {
      name: "November",
      evszak: "osz",
      photoUrl: "./img/november.jpg",
      leiras: "Fusce sodales diam volutpat nulla finibus vulputate.",
    },
    {
      name: "December",
      evszak: "tel",
      photoUrl: "./img/december.jpg",
      leiras: "Fusce dui enim, consequat ac auctor sit amet, mattis eget odio.",
    },
    {
      name: "Január",
      evszak: "tel",
      photoUrl: "./img/januar.jpg",
      leiras:
        "Morbi venenatis hendrerit diam, sit amet feugiat nisi convallis eu.",
    },
    {
      name: "Február",
      evszak: "tel",
      photoUrl: "./img/februar.jpg",
      leiras: "Nunc auctor augue nec accumsan lacinia.",
    },
    {
      name: "Március",
      evszak: "tavasz",
      photoUrl: "./img/marcius.jpg",
      leiras: "Pellentesque aliquam luctus eros a tincidunt.",
    },
    {
      name: "Április",
      evszak: "tavasz",
      photoUrl: "./img/aprilis.jpg",
      leiras:
        "Vivamus dolor turpis, lobortis eu sagittis sit amet, posuere nec justo.",
    },
    {
      name: "Május",
      evszak: "tavasz",
      photoUrl: "./img/majus.jpg",
      leiras: "Sed volutpat tortor sed nunc blandit, vel rutrum erat rhoncus.",
    },
    {
      name: "Június",
      evszak: "nyar",
      photoUrl: "./img/junius.jpg",
      leiras:
        "Nulla erat enim, lobortis et metus vitae, porttitor pharetra arcu.",
    },
    {
      name: "Július",
      evszak: "nyar",
      photoUrl: "./img/julius.jpg",
      leiras: "Duis in lacus in erat imperdiet euismod vitae et massa.",
    },
    {
      name: "Augusztus",
      evszak: "nyar",
      photoUrl: "./img/augusztus.jpg",
      leiras: "Maecenas quis placerat risus, eu blandit nunc.",
    },
  ];

  return (
    <>
      <h1 className="font-serif text-6xl font-bold tracking-tight text-gray-300 mb-3  ">
        Hónapok
      </h1>

      <nav className="bg-gradient-to-r to-pink-500 from-indigo-500 mb-4">
        <ul className="text-4xl  font-bold grid grid-cols-4  shadow-indigo-600 shadow-lg">
          <li>
            <a href="#osz">Ősz</a>
          </li>
          <li>
            <a href="#tel">Tél</a>
          </li>
          <li>
            <a href="#tavasz">Tavasz</a>
          </li>
          <li>
            <a href="#nyar">Nyár</a>
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3 w-full">
        {honapok.map((honap) => (
          <div
            key={honap.name}
            className={
              honap.evszak === "osz"
                ? "max-w-sm shadow-lg shadow-red-500 w-80 m-4 border-2 border-gray-700 items mx-auto"
                : honap.evszak === "tel"
                ? "max-w-sm shadow-lg shadow-blue-500 w-80 m-4 border-2 border-gray-700 items mx-auto"
                : honap.evszak === "tavasz"
                ? "max-w-sm shadow-lg shadow-green-500 w-80 m-4 border-2 border-gray-700 items mx-auto"
                : "max-w-sm shadow-lg shadow-yellow-500 w-80 m-4 border-2 border-gray-700 items mx-auto"
            }
            id={honap.evszak}
          >
            <div className="items-center">
              <img
                src={honap.photoUrl}
                alt={honap.name}
                className="w-80 h-96"
              />
              <h2 className={honap.evszak === "osz" ? " text-4xl font-extrabold tracking-tight text-red-700 " : honap.evszak ==="tel" ? "text-4xl font-extrabold tracking-tight text-blue-700" : honap.evszak === "tavasz" ? "text-4xl font-extrabold tracking-tight text-green-600" : "text-4xl font-extrabold tracking-tight text-yellow-600"}>
                {honap.name}
              </h2>
              <h3 className={honap.evszak === "osz" ? "text-2xl font-bold text-red-400" : honap.evszak === "tel" ? "text-2xl font-bold text-blue-400" : honap.evszak === "tavasz" ? "text-2xl font-bold text-green-400" : "text-2xl font-bold text-yellow-200"}>
                {honap.evszak}
              </h3>
              <p className="font-bold mb-3 text-white">{honap.leiras}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
