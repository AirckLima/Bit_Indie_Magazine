import "./styles/App.css"

function App() {

  const openMobileNav = () => {
    const mobileNavPanel = document.querySelector("#mobile-navigation")

    if (mobileNavPanel) mobileNavPanel.className = ""

  };
  const closeMobileNav = () => {
    const mobileNavPanel = document.querySelector("#mobile-navigation")

    if (mobileNavPanel) mobileNavPanel.className = "hidden"

  };

  return (
    <div className=" bg-gray-800">
      <header className="flex flex-row items-stretch px-3 py-2 bg-yellow-400">
        <div className="basis-full">
          <img src="" />
          <h1 className="font-honk text-2xl text-balance text-center ml-3"><a href="">Bit Indie <br /> Magazine</a></h1>
        </div>

        <div className="relative flex flex-col place-content-center">
          <nav id="desktop-navigation" className="basis-1/3 absolute right-2 flex flex-row justify-end">
            <button onClick={openMobileNav}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <ul id="desktop-nav-links" className="hidden">
              <li><a href="">Link 1</a></li>
              <li><a href="">Link 2</a></li>
              <li><a href="">Link 3</a></li>
              <li><a href="">Link 4</a></li>
            </ul>
          </nav>
        </div>

        <aside id="mobile-navigation" className="hidden">
          <div className="absolute top-0 left-0">
            <div id="navigation-screen" className="fixed top-0 flex flex-col h-screen w-screen place-content-center z-10 bg-amber-400 opacity-95">
              <button className="absolute top-5 right-5" onClick={closeMobileNav}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-12 h-12">
                  <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                </svg>
              </button>
              <ul className="relative -top-10 text-center text-2xl font-kode font-bold space-y-12">
                <li><a className=" pointer-events-none " href="">Link 1</a></li>
                <li><a className=" pointer-events-none " href="">Link 2</a></li>
                <li><a className=" pointer-events-none " href="">Link 3</a></li>
                <li><a className=" pointer-events-none " href="">Link 4</a></li>
              </ul>
            </div>
          </div>
        </aside>

      </header>


      <main className=" mb-3">
        <section id="main-panel" className="relative flex flex-col gap-y-4 px-3 py-3 mb-5 text-center bg-red-500  drop-shadow-lg " style={{ backgroundImage: "" }}>
          <h2 id="main-title" className=" font-lexend font-semibold text-2xl">TITLE</h2>
          <div className="h-48 w-32 mx-auto bg-orange-400 rounded-sm ">
            <img id="main-item" src="" />
          </div>
          <p id="main-panel-description" className="w-[75%] mx-auto font-lexend font-extralight text-xs text-balance">Some beautiful description about this edition...</p>
        </section>

        <div className=" flex flex-col px-1 gap-y-5">
          <section id="previous-editions-panel" className="  mx-1 px-2 py-1 bg-indigo-950 text-slate-100 border-2 border-slate-300 rounded-md drop-shadow-lg">
            <h2 className=" font-lexend text-2xl">Previous Editions</h2>
            <hr />

            <div className="relative">
              <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-r from-transparent via-transparent via-[95%] to-indigo-950 to-[100%] opacity-90"></div>
              <div className="overflow-x-scroll">
                <div id="previous-editions-showcase" className=" flex flex-row justify-between w-[160%] py-2  pr-5 pl-2 ">
                  <div id="edition-index-1" className="w-16 h-24 shrink-0 bg-orange-400 rounded-sm">
                    <img src="" />
                  </div>
                  <div id="edition-index-2" className="w-16 h-24 shrink-0 bg-orange-400 rounded-sm">
                    <img src="" />
                  </div>
                  <div id="edition-index-3" className="w-16 h-24 shrink-0 bg-orange-400 rounded-sm">
                    <img src="" />
                  </div>
                  <div id="edition-index-4" className="w-16 h-24 shrink-0 bg-orange-400 rounded-sm">
                    <img src="" />
                  </div>
                  <div id="edition-index-5" className="w-16 h-24 shrink-0 bg-orange-400 rounded-sm">
                    <img src="" />
                  </div>

                  <a href="" className="self-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center mr-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>

            <div>
              <h3 id="highlight-edition-title"></h3>
              <img id="highlight-edition-image" src="" />
            </div>
          </section>

          <section id="community-highlights-panel" className=" mx-1 px-2 py-2 bg-orange-500 text-slate-100 border-2 border-slate-300 rounded-md drop-shadow-lg">
            <div className=" mb-2 ">
              <h2 className="text-end font-lexend text-2xl ">Community Drops</h2>
              <hr />
            </div>
            <div className="relative">

              <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-r from-transparent via-transparent via-[95%] to-orange-500 to-[100%] opacity-90"></div>

              <div id="community-comments" className="overflow-x-scroll px-2 mt-2">
                <div className="flex flex-row gap-x-7 w-[312%]">
                  <article id="comment-index-1" className="h-32 w-56 bg-purple-950 rounded-sm">
                    <div className="comment-header flex flex-row px-2 py-1">
                      <img src="" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <h3 className="user-nickname inline-block align-super ">user</h3>
                    </div>
                    <div className=" px-3 py-1 text-balance ">
                      <p>comment 1</p>
                    </div>
                  </article>

                  <article id="comment-index-2" className="h-32 w-56 bg-purple-950 rounded-sm">
                    <div className="comment-header flex flex-row  px-2 py-1">
                      <img src="" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <h3 className="user-nickname inline-block align-super">user</h3>
                    </div>
                    <div className=" px-3 py-1 text-balance ">
                      <p>comment 2</p>
                    </div>
                  </article>

                  <article id="comment-index-3" className="h-32 w-56 bg-purple-950 rounded-sm">
                    <div className="comment-header flex flex-row  px-2 py-1">
                      <img src="" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <h3 className="user-nickname inline-block align-super ">user</h3>
                    </div>
                    <div className=" px-3 py-1 text-balance ">
                      <p>comment 3</p>
                    </div>
                  </article>

                  <article id="comment-index-4" className="h-32 w-56 bg-purple-950 rounded-sm">
                    <div className="comment-header flex flex-row  px-2 py-1">
                      <img src="" />
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      <h3 className="user-nickname inline-block align-super ">user</h3>
                    </div>
                    <div className=" px-3 py-1 text-balance ">
                      <p>comment 4</p>
                    </div>
                  </article>

                  <a href="" className="self-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -rotate-45 fill-purple-950   ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                  </a>

                </div>
              </div>
            </div>
          </section>

          <section id="donation-panel" className=" mx-1 px-2 py-2 bg-rose-800 text-slate-100 border-2 border-slate-300 rounded-md drop-shadow-lg">
            <div className=" mb-2 ">
              <h2 className=" font-lexend text-2xl">Support Our Work</h2>
              <img src="" />
              <hr />
            </div>

            <p className="font-light text-xs mb-1 ">Explanation about donations</p>

            <div className=" h-48 overflow-scroll p-2">
              <div className="flex flex-col gap-y-2">

                <div id="donation-category-1" className="relative h-fit text-center bg- border-2 border-white rounded ">
                  {/* <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div> */}
                  <div className=" pointer-events-none flex flex-col place-content-start h-full  " >
                    <img src="" />
                    <h3 className=" font-lexend" > CATEGORY 1</h3>
                    <ul className="grid grid-cols-2 h-fit min-h-12 place-content-center">
                      <li>item 1</li>
                      <li>item 2</li>
                    </ul>
                    <div className="bottom-2 w-full my-2">
                      <button className=" font-semibold text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                    </div>
                  </div>
                </div>

                <div id="donation-category-2" className="relative h-fit text-center bg- border-2 border-white rounded ">
                  {/* <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div> */}
                  <div className=" pointer-events-none flex flex-col place-content-start h-full  " >
                    <img src="" />
                    <h3 className=" font-lexend" > CATEGORY 2</h3>
                    <ul className="grid grid-cols-2 h-fit min-h-12 place-content-center">
                      <li>item 1</li>
                      <li>item 2</li>
                      <li>item 3</li>
                    </ul>
                    <div className="bottom-2 w-full my-2">
                      <button className=" font-semibold text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                    </div>
                  </div>
                </div>

                <div id="donation-category-3" className="relative h-fit text-center bg- border-2 border-white rounded ">
                  {/* <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div> */}
                  <div className=" pointer-events-none flex flex-col place-content-start h-full " >
                    <img src="" />
                    <h3 className=" font-lexend" > CATEGORY 3</h3>
                    <ul className="grid grid-cols-2 h-fit">
                      <li>item 1</li>
                      <li>item 2</li>
                      <li>item 3</li>
                      <li>item 4</li>
                      <li>item 5</li>
                    </ul>
                  </div>
                  <div className="  w-full my-2">
                    <button className=" font-semibold text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id="about-panel" className=" mx-1 px-2 py-2 bg-violet-950 text-slate-100 border-2 border-slate-300 rounded-md drop-shadow-lg">
            <div className=" mb-2 ">
              <h2 className=" font-lexend text-2xl text-end">About This Project!</h2>
              <img src="" />
              <hr />
            </div>
            <div>
              <p className=" text-sm"> Know everything about this project.</p>
              <ul className="  list-disc list-inside" >
                <li className=""> Who are we?</li>
                <li className=""> What do we do?</li>
                <li className=""> Why a magazine?</li>
              </ul>
              <div className="flex flex-row justify-center w-full my-2">
                <a className="font-semibold text-sm bg-orange-500 px-2 py-1 rounded-md">
                  ABOUT
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>

      <footer className=" bg-slate-900 rounded-t-md px-2 py-1">
        <ul>
          <div className=" grid grid-cols-3 text-center justify-center">
            <li>
              <div>
                <p className="pointer-events-none text-uxs font-semibold text-slate-400">FOLLOW US</p>
              </div>
              <div className="flex flex-row justify-center my-1">
                <a className=" pointer-events-none " href="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter w-6 h-6 fill-slate-400" viewBox="0 0 24 24">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                  </svg>

                </a>
                <a className=" pointer-events-none " href="">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="none" className="w-6 h-6 fill-slate-400  " viewBox="0 0 24 24">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </div>
                </a>
                <a className=" pointer-events-none " href="">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-slate-400 stroke-transparent" viewBox="0 0 24 24">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                </a>
              </div>
            </li>
            <li><a className=" pointer-events-none text-uxs font-semibold text-slate-400" href="">SUPPORT</a></li>
            <li><a className=" pointer-events-none text-uxs font-semibold text-slate-400" href="">ABOUT</a></li>
          </div>
        </ul>
      </footer>
    </div>
  )
}

export default App
