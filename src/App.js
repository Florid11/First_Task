import list from "../src/components/list";

function App() {
const comp =[
  {
  image : 'https://img.icons8.com/external-tal-revivo-light-tal-revivo/1DA1F2/external-dot-com-domain-for-sale-under-landing-page-template-landing-light-tal-revivo.png',
    title: "The TLD",
    description: "Does the domain extension math the language of the domain name?"
  },
  {
    image : 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/1DA1F2/external-ruler-graphic-design-vitaliy-gorbachev-lineal-vitaly-gorbachev.png',
    title: "Domain Length",
    description: "Is the domain short enough to remember"
  },
  {
    image : 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/1DA1F2/external-world-web-and-social-media-flatart-icons-outline-flatarticons.png',
    title: "Language",
    description: "How complex is the actual domain name?"
  },
  {
    image : 'https://img.icons8.com/external-justicon-lineal-justicon/1DA1F2/external-medal-awards-justicon-lineal-justicon-10.png',
    title: "International recognition",
    description: "Can the domain name be used on an International scale?"
  },
  {
    image : 'https://img.icons8.com/ios/1DA1F2/search--v1.png',
    title: "Search engine",
    description: "Does the domain follow search engine guidelines?"
  },
  {
    image : 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/1DA1F2/external-speaker-project-planing-flatart-icons-outline-flatarticons.png',
    title: "Advertising Potencial",
    description: "Could the domain be used for advertising campaigns?"
  },
  {
    image : 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/1DA1F2/external-sales-miscellaneous-kiranshastry-lineal-kiranshastry.png',
    title: "Scale Opportunities",
    description: "Can the domain name be used on an International scale?"
  },
  {
    image : 'https://img.icons8.com/external-justicon-lineal-justicon/1DA1F2/external-text-graphic-design-justicon-lineal-justicon.png',
    title: "Typo suspectibility",
    description: "How high is the risk of mistyping the domain name?"
  },
  {
    image : 'https://img.icons8.com/wired/1DA1F2/idea-sharing.png',
    title: "Business potential",
    description: "Can the domain be used as your company addres?"
  }
]

  const employees =[
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
    {
      profilePic: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
      name: 'Kevin joe',
      date: '3.1.0 (20/05/2015)',
      job: 'Fix',
      description: 'Introducing Host Cloud Drive - virtual drive functionally'
    },
  ]

  return (
    <div className="app">
      <div className='first-div'>
        {comp.map((components) => {
          return(
              <div className='box'>
                <img src={components.image} alt="Logo" className='Logo' />
                <div>
                  <h3>{components.title}</h3>
                  <p>{components.description}</p>
                </div>
              </div>
          );
        })}
      </div>
      <div >
        {employees.map((employee =>
                <list profilePicture={employee.profilePic} name={employee.name} date={employee.date} job={employee.job} decription={employee.description}/>
        ))}
        <list />
      </div>


    </div>
  );
}

export default App;
