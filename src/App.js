import User from './User'
function App() {

  let users = [
    {
      id: 25,
      name: 'john',
      age: 25,
      place: 'Hyderabad'
    },
    {
      id: 26,
      name: 'foo',
      age: 27,
      place: 'Bangalore'
    },
    {
      id: 27,
      name: 'ram',
      age: 28,
      place: 'Bangalore'
    }
  ]

  return (
    <>
      {
        users.map(
          (u) => {
            return <User key={u.id} id={u.id} name={u.name} age={u.age} place={u.place} />
          }
        )

      }

    </>





  )
}

export default App