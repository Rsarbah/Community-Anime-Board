import './App.css';
import Card from './Components/Card';
import onepiece from './images/onepiece3.jpg';
import naruto from './images/naruto3.jpg';
import hunter from './images/hunter.jpg';
import bleach from './images/bleach.jpg';
import blackc from './images/blackc.jpg';
import jujutsu from './images/jujutsu.jpg';
import dragon from './images/dragon.jpg';
import baki from './images/baki.jpg';
import full from './images/full.jpg';
import kengan from './images/kengan.jpg';




const App = () => {

  return (
    <div className="App">
      <h1>Community Anime Board</h1>
      <div className="card-container">
          <Card
          title="One Piece"
          description="The story follows Monkey D. Luffy and the Straw Hat Pirates as they journey through the Grand Line to find the legendary treasure the One Piece."
          image={onepiece}
          link="https://en.wikipedia.org/wiki/One_Piece"
          />
          <Card
          title="Naruto"
          description="The story of Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and the leader of his village, known as the Hokage."
          image={naruto}
          link="https://en.wikipedia.org/wiki/Naruto"
          />
          <Card
          title="Hunter x Hunter"
          description="The story follows a young boy named Gon Freecss as he embarks on a journey to become a Hunter and find his father, who is also a legendary Hunter."
          image={hunter}
          link="https://en.wikipedia.org/wiki/Hunter_×_Hunter"
          />
          <Card
          title="Bleach"
          description="The story follows Ichigo Kurosaki, a teenager with the ability to see ghosts, who becomes involved in a battle between the living world and the afterlife.."
          image={bleach}
          link="https://en.wikipedia.org/wiki/Bleach_(TV_series)"
          />
          <Card
          title="Jujutsu Kaisen"
          description="The story revolves around curses, sorcery, and the battle between cursed spirits and jujutsu sorcerers.."
          image={jujutsu}
          link="https://en.wikipedia.org/wiki/Jujutsu_Kaisen"
          />
          <Card
          title="Black Clover"
          description="The story follows Asta, a young boy born without any magical power in a world where magic is everything, as he strives to become the Wizard King."
          image={blackc}
          link="https://en.wikipedia.org/wiki/Black_Clover"
          />
          <Card
          title="Dragon Balls"
          description="Its combination of humor, action, and heartwarming moments has endeared it to fans worldwide, making it a timeless classic in the realm of anime and manga.."
          image={dragon}
          link="https://en.wikipedia.org/wiki/Dragon_Ball"
          />
          <Card
          title="Baki"
          description="It centers around martial arts and features intense battles between skilled fighters."
          image={baki}
          link="https://en.wikipedia.org/wiki/Baki"
          />
          <Card
          title="FullMetal Alchemist"
          description="The story blends fantasy, adventure, and philosophical themes, exploring the consequences of ambition, sacrifice, and the nature of humanity."
          image={full}
          link="https://en.wikipedia.org/wiki/Fullmetal_Alchemist"
          />
          <Card
          title="Kengan Ashura"
          description="It focuses on the world of underground fighting and the battles between powerful martial artists representing various corporations."
          image={kengan}
          link="https://en.wikipedia.org/wiki/Kengan_Ashura"
          />
      </div>
      
      
    </div>
  )
}
export default App

