import "./styles/App.css"

function App() {
  return (
    <div className=" bg-slate-700">
      <header className="flex flex-row items-stretch px-3 py-2 bg-yellow-400">
        <div className="basis-full">
          <img src="" />
          <h1 className="font-honk text-2xl text-balance text-center ml-3"><a href="">Bit Indie <br /> Magazine</a></h1>
        </div>

        <div className="relative flex flex-col place-content-center">
          <nav className="basis-1/3 absolute right-2 flex flex-row justify-end">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            <ul id="horizontal-navbar" className="hidden">
              <li><a href="">Link 1</a></li>
              <li><a href="">Link 2</a></li>
              <li><a href="">Link 3</a></li>
              <li><a href="">Link 4</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <aside className="hidden">
        <div id="navigation-screen" className="fixed top-0 flex flex-col h-screen w-screen place-content-center z-10 bg-amber-400 opacity-95">
          <div className="absolute top-5 right-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-12 h-12">
              <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
            </svg>
          </div>

          <ul className="relative -top-16 text-center text-2xl font-kode font-bold space-y-12">
            <li><a className=" pointer-events-none " href="">Link 1</a></li>
            <li><a className=" pointer-events-none " href="">Link 2</a></li>
            <li><a className=" pointer-events-none " href="">Link 3</a></li>
            <li><a className=" pointer-events-none " href="">Link 4</a></li>
          </ul>
        </div>
      </aside>

      <main>
        <section id="main-panel" className="relative flex flex-col gap-y-4 px-3 py-3 mb-5 text-center bg-red-500  shadow-lg " style={{ backgroundImage: "" }}>
          <h2 id="main-title" className=" font-lexend font-semibold text-2xl">TITLE</h2>
          <div className="h-48 w-32 mx-auto bg-orange-400 rounded-sm ">
            <img id="main-item" src="" />
          </div>
          <p id="main-panel-description" className="w-[75%] mx-auto font-lexend font-extralight text-xs text-balance">Some beautiful description about this edition...</p>
        </section>

        <div className=" flex flex-col px-1 gap-y-5">
          <section id="previous-editions-panel" className="  mx-1 px-2 py-1 bg-indigo-950 text-slate-100 border-2 border-slate-100 rounded-sm shadow-lg">
            <h2 className=" font-lexend text-2xl">Previous Editions</h2>
            <hr />

            <div className="relative">
              <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-r from-transparent via-transparent via-[90%] to-indigo-950 to-[100%] opacity-90"></div>
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

          <section id="community-highlights-panel" className=" mx-1 px-2 py-2 bg-orange-500 text-slate-100 border-2 border-slate-100 rounded-sm shadow-lg">
            <h2 className="text-end font-lexend text-2xl " >Community Drops</h2>
            <hr />
            <div className="relative">

              <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-r from-transparent via-transparent via-[90%] to-orange-500 to-[100%] opacity-90"></div>

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

          <section id="donation-panel" className=" mx-1 px-2 py-2 bg-red-500 text-slate-100 border-2 border-slate-100 rounded-sm shadow-lg">
            <h2 className=" font-lexend text-2xl">Support Our Work</h2>
            <img src="" />
            <hr />

            <div className=" h-48 overflow-scroll p-2">
              <div className="flex flex-col gap-y-2">
                <p className="font-light text-xs ">Explanation about donations</p>
                <div id="donation-category-1" className="relative h-32 text-center bg-rose-800 rounded ">
                  <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div>
                  <div className=" pointer-events-none flex flex-col place-content-start  h-full " >
                    <img src="" />
                    <h3 className=" font-lexend" > CATEGORY 1</h3>
                    <ul className="h-24">
                      <li>item 1</li>
                      <li>item 2</li>
                    </ul>
                    <div className="absolute bottom-2 w-full">
                      <button className=" text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                    </div>
                  </div>
                </div>
                <div id="donation-category-2" className="relative h-32 text-center bg-rose-800 rounded ">
                  <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div>
                  <div className=" pointer-events-none flex flex-col place-content-start  h-full " >
                    <img src="" />
                    <h3 className=" font-lexend" > CATEGORY 2</h3>
                    <ul className="h-24">
                      <li>item 1</li>
                      <li>item 2</li>
                      <li>item 3</li>
                    </ul>
                    <div className="absolute bottom-2 w-full">
                      <button className=" text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                    </div>
                  </div>
                </div>
                <div id="donation-category-3" className="relative h-32 text-center bg-rose-800 rounded ">
                  <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div>
                  <div className=" pointer-events-none flex flex-col place-content-start  h-full overflow-hidden" >
                    <img src="" />
                    <h3 className=" font-lexend" > CATEGORY 3</h3>
                    <ul className="h-24">
                      <li>item 1</li>
                      <li>item 2</li>
                      <li>item 3</li>
                      <li>item 4</li>
                      <li>item 5</li>
                    </ul>
                  </div>
                  <div className="absolute bottom-2 w-full">
                    <button className=" text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="about-panel">
            <h2>Know Everything About This Project!</h2>
            <img src="" />
            <div>
              <p></p>
              <a href="">
              </a>
            </div>
          </section>

          <section id="contact-panel">
            <h2>Follow Our Channels</h2>
            <div>
              <a className=" pointer-events-none " href="">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="w-12 h-12" fill="none" viewBox="0 0 24 24">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
              <a className=" pointer-events-none " href="">
                <div>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-12 h-12  fill-white" viewBox="0 0 24 24">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                </div>
              </a>
              <a className=" pointer-events-none " href="">
              </a>
              <a className=" pointer-events-none " href="">
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <ul>
          <div>
            <li><a className=" pointer-events-none " href="">JOIN TO THE COMMUNITY</a></li>
            <li><a className=" pointer-events-none " href="">SUPPORT</a></li>
            <li><a className=" pointer-events-none " href="">ABOUT</a></li>
          </div>
          <div>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
          </div>
        </ul>
      </footer>
    </div>
  )
}

export default App
