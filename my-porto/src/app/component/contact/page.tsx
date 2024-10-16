import Link from "next/link";
export default function ContactMe(){
    return(<>
    <div>
          {/* <h3 className="text-2xl md:text-4xl xl:text-5xl">Find me!</h3> */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="https://www.linkedin.com/in/frisqia-fatmalaningsih-325967221/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 mt-4 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full hover:bg-blue-700 flex justify-center items-center transition duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current text-white"
                >
                  <path d="M100.28 448H7.4V149.1h92.88zm-46.44-334.2c-31.6 0-57.24-25.65-57.24-57.24 0-31.6 25.64-57.23 57.24-57.23 31.6 0 57.23 25.64 57.23 57.23 0 31.59-25.63 57.24-57.23 57.24zm345.4 334.2h-92.7V302.4c0-34.7-12.7-58.4-44.6-58.4-24.3 0-38.8 16.4-45.2 32.3-2.3 5.6-2.8 13.5-2.8 21.4v150.2h-92.78s1.24-243.6 0-268.9h92.78v38.1c12.3-19 34.4-46.2 83.6-46.2 61 0 106.7 39.8 106.7 125.4z" />
                </svg>
                
              </button>
            </Link>
            <Link
              href="https://github.com/frisqia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 mt-4 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full hover:bg-blue-700 flex justify-center items-center transition duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current text-white"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.016c0 4.418 2.865 8.167 6.839 9.49.5.091.682-.217.682-.482 0-.237-.01-1.025-.015-1.86-2.782.604-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.003.07 1.532 1.032 1.532 1.032.892 1.532 2.341 1.09 2.91.834.09-.646.348-1.09.634-1.34-2.223-.253-4.56-1.1-4.56-4.893 0-1.08.385-1.963 1.018-2.65-.102-.253-.442-1.271.097-2.649 0 0 .83-.266 2.724 1.018A9.423 9.423 0 0112 3.543c.84.004 1.685.113 2.465.331 1.895-1.284 2.724-1.018 2.724-1.018.539 1.378.199 2.396.097 2.649.635.687 1.018 1.57 1.018 2.65 0 3.797-2.34 4.634-4.57 4.883.359.313.678.928.678 1.868 0 1.351-.012 2.439-.012 2.775 0 .267.18.577.688.48C21.138 20.184 24 16.435 24 12c0-5.516-4.477-10-10-10z" />
                </svg>
                
              </button>
            </Link>
            <Link
              href="https://www.instagram.com/xiaocia__/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 mt-4 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full hover:bg-blue-700 flex justify-center items-center transition duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current text-white"
                >
                  <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.1 224.1 371.1 339.2 319.6 339.2 256 287.7 141 224.1 141zm0 186.8c-39.5 0-71.8-32.3-71.8-71.8s32.3-71.8 71.8-71.8 71.8 32.3 71.8 71.8-32.3 71.8-71.8 71.8zm146.4-186.8c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.4-36.3-93.8-26.4-26.4-58.1-34.5-93.8-36.3-37.1-2.1-148.4-2.1-185.5 0-35.7 1.7-67.4 9.9-93.8 36.3-26.4 26.4-34.5 58.1-36.3 93.8-2.1 37.1-2.1 148.4 0 185.5 1.7 35.7 9.9 67.4 36.3 93.8 26.4 26.4 58.1 34.5 93.8 36.3 37.1 2.1 148.4 2.1 185.5 0 35.7-1.7 67.4-9.9 93.8-36.3 26.4-26.4 34.5-58.1 36.3-93.8 2.1-37.1 2.1-148.4 0-185.5zm-48.1 224c-7.8 19.6-22.9 34.7-42.5 42.5-29.5 11.7-99.5 9-132.5 9s-103 .6-132.5-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.5-9-99.5-9-132.5s-.6-103 9-132.5c7.8-19.6 22.9-34.7 42.5-42.5 29.5-11.7 99.5-9 132.5-9s103-.6 132.5 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.5 9 99.5 9 132.5s2.7 103-9 132.5z" />
                </svg>
                
              </button>
            </Link>

            <Link
              href="https://web.facebook.com/frifani.xiaocia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 mt-4 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full hover:bg-blue-700 flex justify-center items-center transition duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current text-white"
                >
                  <path d="M279.14 288l14.22-92.66H204.91v-60.08c0-26.7 12.9-52.73 54.13-52.73h41.4V7.26S260.89 0 226.53 0C138.12 0 90.23 53.29 90.23 149.06v64.28H0v92.66h90.23V512h100.2V288z" />
                </svg>
                
              </button>
            </Link>
            <Link
              href="https://twitter.com/xiaocia__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-7 h-7 md:w-9 md:h-9 lg:w-11 lg:h-11 mt-4 p-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full hover:bg-blue-700 flex justify-center items-center transition duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-current text-white"
                >
                  <path d="M23.953 4.569c-.885.392-1.83.656-2.825.775 1.017-.607 1.794-1.57 2.163-2.724-.949.564-2.004.974-3.127 1.195-.896-.955-2.173-1.55-3.593-1.55-2.724 0-5.006 2.172-5.006 4.848 0 .379.045.742.128 1.097C7.691 8.093 4.066 6.13 1.64 3.161c-.427.733-.666 1.577-.666 2.487 0 1.72.862 3.232 2.178 4.123-.804-.025-1.56-.246-2.228-.615v.063c0 2.396 1.677 4.397 3.908 4.853-.409.112-.839.173-1.284.173-.313 0-.616-.03-.917-.086.617 1.92 2.416 3.314 4.548 3.353-1.668 1.307-3.766 2.083-6.038 2.083-.392 0-.779-.023-1.164-.067 2.153 1.367 4.705 2.164 7.434 2.164 8.911 0 13.785-7.394 13.785-13.794 0-.21-.005-.421-.014-.63.947-.684 1.77-1.54 2.415-2.51z" />
                </svg>
              
              </button>
            </Link>
          </div>
        </div>
    </>)
}