

function App() {
const comp =[
  {
  image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    title: "The TLD",
    description: "Does the domain extension math the language of the domain name?"
  },
  {
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    title: "The TLD",
    description: "Does the domain extension math the language of the domain name?"
  },
  {
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    title: "The TLD",
    description: "Does the domain extension math the language of the domain name?"
  },
  {
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    title: "The TLD",
    description: "Does the domain extension math the language of the domain name?"
  },
  {
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    title: "The TLD",
    description: "Does the domain extension math the language of the domain name?"
  },
  {
    image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    title: "The TLD",
    description: "Does the domain extension math the language of the domain name?"
  }
]
  return (
    <div className="app">
      {comp.map((components) => {
            return(
              <div className='box'>
                <img src={components.image} alt="Logo"/>
                <p>{` |   Title: ${components.title}  |  Decription: ${components.description}`}</p>
              </div>
            );
      })}
    </div>
  );
}

export default App;
