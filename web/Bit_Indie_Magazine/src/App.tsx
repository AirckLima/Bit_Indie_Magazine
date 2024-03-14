import "./styles/App.css"

function App() {
  return (
    <div>
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
        <div id="navigation-screen" className="fixed top-0 flex flex-col h-screen w-screen place-content-center bg-amber-400 opacity-95">
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
          <p id="main-panel-description" className="w-[75%] mx-auto font-lexend font-extralight text-xs text-balance">Some beautyful description about this edition...</p>
        </section>

        <div className="flex flex-col gap-y-5">
          <section id="previous-editions-panel" className=" mx-1 px-2 py-1 bg-indigo-950 text-slate-100 rounded-sm shadow-lg">
            <h2 className=" font-lexend">Previous Editions</h2>
            <hr />

            <div id="previous-editions-showcase" className="flex flex-row gap-x-7 px-3 py-2 ">
              <div id="edition-index-1" className="h-24 w-16 bg-orange-400 rounded-sm">
                <img src="" />
              </div>
              <div id="edition-index-2" className="h-24 w-16 bg-orange-400 rounded-sm">
                <img src="" />
              </div>
              <div id="edition-index-3" className="h-24 w-16 bg-orange-400 rounded-sm">
                <img src="" />
              </div>
              <div id="edition-index-4" className="h-24 w-16 bg-orange-400 rounded-sm">
                <img src="" />
              </div>
            </div>

            <div>
              <h3 id="highlight-edition-title"></h3>
              <img id="highlight-edition-image" src="" />
            </div>
          </section>

          <section id="community-highlights-panel" className=" mx-1 px-2 py-1 bg-orange-500 text-slate-100 rounded-sm shadow-lg">
            <h2 className="text-end font-lexend " >Community Drops</h2>
            <hr />

            <div id="community-comments" className="overflow-x-scroll px-2 mt-2">
              <div className="flex flex-row gap-x-7 w-fit">
                <article id="comment-index-1" className="h-32 w-56 bg-purple-900 rounded-sm">
                  <div className="comment-header flex flex-row ">
                    <img src="" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3 className="user-nickname inline-block align-super ">user</h3>
                  </div>
                  <div className=" text ">
                    <p>comment 1</p>
                  </div>
                </article>

                <article id="comment-index-2" className="h-32 w-56 bg-purple-900 rounded-sm">
                  <div className="comment-header flex flex-row ">
                    <img src="" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3 className="user-nickname inline-block align-super">user</h3>
                  </div>
                  <div className=" text ">
                    <p>comment 2</p>
                  </div>
                </article>

                <article id="comment-index-3" className="h-32 w-56 bg-purple-900 rounded-sm">
                  <div className="comment-header flex flex-row ">
                    <img src="" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3 className="user-nickname inline-block align-super ">user</h3>
                  </div>
                  <div className=" text ">
                    <p>comment 3</p>
                  </div>
                </article>

                <article id="comment-index-4" className="h-32 w-56 bg-purple-900 rounded-sm">
                  <div className="comment-header flex flex-row ">
                    <img src="" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <h3 className="user-nickname inline-block align-super ">user</h3>
                  </div>
                  <div className=" text ">
                    <p>comment 4</p>
                  </div>
                </article>

              </div>
            </div>
          </section>

          <section id="donation-panel">
            <div>
              <h2>Support Our Work</h2>
              <img src="" />
            </div>
            <div>
              <p></p>
              <div className="donation-category-1">
                <a className=" pointer-events-none" href="">
                  <img src="" />
                  <h3></h3>
                  <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                  </ul>
                </a>
              </div>
              <div className="donation-category-2">
                <a className=" pointer-events-none" href="">
                  <img src="" />
                  <h3></h3>
                  <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                  </ul>
                </a>
              </div>
              <div className="donation-category-3">
                <a className=" pointer-events-none" href="">
                  <img src="" />
                  <h3></h3>
                  <ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                    <li>item 5</li>
                  </ul>
                </a>
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
                <svg></svg>
              </a>
              <a className=" pointer-events-none " href="">
                <svg></svg>
              </a>
              <a className=" pointer-events-none " href="">
                <svg></svg>
              </a>
              <a className=" pointer-events-none " href="">
                <svg></svg>
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
