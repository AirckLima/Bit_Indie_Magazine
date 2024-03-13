import "./styles/App.css"

function App() {
  return (
    <div>
      <header className="flex flex-row px-3 py-3 bg-yellow-500">
        <div className="basis-2/3 ">
          <img src="" />
          <h1 className="font-honk text-xl text-balance">Double Indie Magazine</h1>
        </div>

        <nav className="basis-1/3 flex flex-row justify-end pr-1">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 justify-self-center border bg-yellow-600 text-red-700 border-red-700 rounded">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <ul className="hidden lg:flex lg:flex-row ">
            <li><a href="">Link 1</a></li>
            <li><a href="">Link 2</a></li>
            <li><a href="">Link 3</a></li>
            <li><a href="">Link 4</a></li>
          </ul>
        </nav>
      </header>

      <main className="">
        <section id="main-panel">
          <h2 id="main-title"></h2>
          <img id="main-panel-backgroun" src="" />
          <p id="main-panel-description"></p>
          <img id="main-item" src="" />
        </section>

        <section id="previous-editions-panel">
          <h2>Previous Editions</h2>

          <div id="previous-editions-showcase">
            <div id="edition-index-1">
              <img src="" />
            </div>
            <div id="edition-index-2">
              <img src="" />
            </div>
            <div id="edition-index-3">
              <img src="" />
            </div>
            <div id="edition-index-4">
              <img src="" />
            </div>
          </div>

          <div>
            <h3 id="highlight-edition-title"></h3>
            <img id="highlight-edition-image" src="" />
          </div>
        </section>

        <section id="community-highlights-panel">
          <div>
            <h2>Community Drops</h2>
          </div>

          <div id="community-comments">
            <article id="comment-index-1">
              <div className="comment-header">
                <img src="" />
                <h3 className="user-nickname"></h3>
              </div>
              <div>
                <p>comment 1</p>
              </div>
            </article>
            <article id="comment-index-2">
              <div className="comment-header">
                <img src="" />
                <h3 className="user-nickname"></h3>
              </div>
              <div>
                <p>comment 2</p>
              </div>
            </article>
            <article id="comment-index-3">
              <div className="comment-header">
                <img src="" />
                <h3 className="user-nickname"></h3>
              </div>
              <div>
                <p>comment 3</p>
              </div>
            </article>
            <article id="comment-index-4">
              <div className="comment-header">
                <img src="" />
                <h3 className="user-nickname"></h3>
              </div>
              <div>
                <p>comment 4</p>
              </div>
            </article>
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
              <a href="">
                <img src="" />
                <h3></h3>
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                </ul>
              </a>
            </div>
            <div className="donation-category-2">
              <a href="">
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
              <a href="">
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

            <a href="">
              <svg></svg>
            </a>
            <a href="">
              <svg></svg>
            </a>
            <a href="">
              <svg></svg>
            </a>
            <a href="">
              <svg></svg>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <ul>
          <div>
            <li><a href="">JOIN TO THE COMMUNITY</a></li>
            <li><a href="">SUPPORT</a></li>
            <li><a href="">ABOUT</a></li>
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
