
import { Header } from './components/Header';
import {Post} from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/42808798?v=4',
      name: 'Joézer Smaniotto',
      role: 'Web Developer'
    },
    content:[
        { type: 'paragraph', content:'Fala galeraa 👋'},
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-10 20:00:00'),
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/natidevcs.png',
      name: 'Natalia Azevedo',
      role: 'Data Analistics'
    },
    content:[
        { type: 'paragraph', content:'Fala galeraa 👋'},
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-01-12 15:00:00'),
  }

]

function App() {
 
  return (
    <>
      <Header/>


      <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {
              posts.map((post)=>{
                return(
                  <Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              })
            }

         	  
            
          </main>
      </div>
   </>
  )
}

export default App