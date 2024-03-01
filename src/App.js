import './App.css';
import React, { useEffect, useState } from 'react';
import { api, searchMovie } from './api';
import RatingStars from './Rating';


const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    api.get('/movie/popular').then((response) => {
      setPopularMovies(response.data.results);
    });
  }, []);

  const PopularMovieList = () => {
    return (
      <>
        {popularMovies.map((movie, i) => (
          <div key={i}>
            <div className="card w-60 bg-slate-700 shadow-xl">
              <figure className='h-70 w-58 mx-auto'><img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="Film" /></figure>
              <div className="card-body items-center text-center bg-slate-700 rounded-lg shadow-xl">
                <h2 className="card-title">
                  {movie.title}
                </h2>
                <p className='text-sm'>Release {movie.release_date}</p>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3.97 3.97a.75.75 0 0 1 1.06 0l13.72 13.72V8.25a.75.75 0 0 1 1.5 0V19.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1 0-1.5h9.44L3.97 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    Overview
                  </div>
                  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-neutral text-primary-content">
                    <div className="card-body">
                      <h3 className="card-title text-neutral-content"> Overview</h3>
                      <p className='text-neutral-content text-left'>{movie.overview}</p>
                      <p className='text-neutral-content text-left'>(Language {movie.original_language})</p>
                    </div>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <RatingStars rating={(movie.vote_average.toFixed(1))} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }

  const search = async (q) => {
    const query = await searchMovie(q)
    setPopularMovies(query.results)
  }

  return (
    <div>
      <header>
        <link rel="stylesheet" href="./output.css" />
        <div class="font-extrabold text-center mt-7 sm:text-4xl xl:text-5xl">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 uppercase">
            info movie gallery
          </span>
        </div>
        <div className='flex justify-center items-center mt-12 mb-6'>
          <label className="flex-none input input-bordered flex items-center mr-5">
            <input type="text" className="grow" placeholder="Cari film..." onChange={({ target }) => search(target.value)} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
          </label>
        </div>
        <h2 className='popular-movie mb-5 font-bold xl:ml-24 sm:ml-12 xl:text-2xl sm:text-xl'>Popular Movie</h2>
        <div className='Movie-container'>
          <PopularMovieList />
        </div>
      </header >
      <footer className="footer footer-center p-10 mt-4 bg-base-200 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - INFO MOVIE GALERY</p>
        </aside>
      </footer>
    </div>
  )
}

export default App;