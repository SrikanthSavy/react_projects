function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}


const reactDescrption = ['Fundamental','Core','Crucial']

function getRandonInt(max)
{
  return Math.floor(Math.random()*(max+1));
}



export function Header() {
  const description = reactDescrption[getRandonInt(2)]
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials SHoda</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default App;


