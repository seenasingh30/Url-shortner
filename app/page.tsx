import Image from "next/image";
import NavBar from "./_component/NavBar";

export default function Home() {
  return (
    <div className="bg-gray-100 h-full w-full">
      <NavBar />
      <div className="container mx-auto h-full justify-center">
        {/* form url shortner */}
        <section className="flex justify-center items-center h-full pb-20">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold text-center">Shorten Your Link</h1>
            <form action="" className="flex justify-center items-center mt-4">
              <input
                type="text"
                placeholder="Enter your link here"
                className="w-1/2 p-2 rounded-l-md"
              />
              <button className="btn bg-green-800 text-white p-2 rounded-r-md">
                Shorten
              </button>
            </form>
            <div className="flex justify-center items-center mt-4">
              <input
                type="text"
                placeholder="linkify.me/xa6hbHm"
                className="w-1/2 p-2 rounded-md"
                disabled
              />
              <button className="btn bg-gray-400 text-white p-2 rounded-md">
                Copy
              </button>
            </div>
            {/* list of Urls shorten by You */}
            <div className="justify-center items-center mt-4">
              <h2 className="text-2xl font-bold">Your Links</h2>
              <div className="flex justify-center items-center mt-4 w-full">
                <div className="w-full">
                  <div className="flex justify-between items-center p-2 bg-gray-200 rounded-md">
                    <div>
                      <h3 className="text-lg font-semibold">
                        linkify.me/xa6hbHm
                      </h3>
                      <p className="text-gray-500">https://www.google.com</p>
                    </div>
                    <div>
                      <button className="btn bg-green-800 text-white p-2 rounded-md">
                        Copy
                      </button>
                      <button className="btn bg-red-800 text-white p-2 rounded-md">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
