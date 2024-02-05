import React from 'react'
import './ReklamPoster.scss'

function ReklamPoster() {
  return (
    <section id='reklamPoster'>
      <div className="textBox">
        <div className="upTextBox">
          <h1>Inception</h1>
          <div className="writterBox">
            <p>Writter And Directed</p>
            <p>Christopher Nolan / 2010</p>
          </div>
        </div>
        <div className="downTextBox">
          <h4>Warner Bros</h4>
          <span>directed by</span>
          <p>Christopher Nolan</p>
          <span>writter by</span>
          <p>Christopher Nolan</p>
        </div>
      </div>
    </section>
  )
}

export default ReklamPoster