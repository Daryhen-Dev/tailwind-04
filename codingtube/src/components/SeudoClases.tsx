export const SeudoClases = () => {
  return (
    <div className="p-4">
      <button
        className="bg-orange-600 w-32 p-3 
       rounded-md 
       after:content-[''] 
       relative 
       after:absolute after:left-32 after:border-8 
       after:border-transparent after:border-l-orange-600 after:top-4"
      >
        Haz click aquí
      </button>
      <input
        type="text"
        placeholder="Nombre:"
        className="px-2 ml-2 border border-neutral-400 placeholder:text-orange-600 placeholder:italic"
      ></input>
      <br />
      <br />
      <input
        title="Selecciona un archivo"
        type="file"
        className="file:bg-violet-100 file:border-0 file:rounded-lg file:text-violet-700 file:font-semibold file:px-3 hover:file:bg-violet-300"
      ></input>

      <br />
      <br />
      <ul className="ml-6 list-decimal marker:text-red-500 marker:font-bold">
        <li>Item</li>
        <li>Item</li>
        <li>Item</li>
      </ul>
      <br />
      <br />
      <p className="selection:bg-yellow-500 selection:text-blue-900 selection:font-bold">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio
        cupiditate dolor debitis voluptatem quisquam dolorem inventore
        provident, earum sapiente itaque officia facere ab eaque corporis quas
        labore modi vel.{" "}
      </p>
      <br />
      <br />
      <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus optio
        cupiditate dolor debitis voluptatem quisquam dolorem inventore
        provident, earum sapiente itaque officia facere ab eaque corporis quas
        labore modi
      </p>
    </div>
  );
};
