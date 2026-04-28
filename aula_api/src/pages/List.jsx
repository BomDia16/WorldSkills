import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [people, setPeople] = useState([])

  const getPeopleData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setPeople(data)
  }

  useEffect(() => {
    getPeopleData()
  }, [])

  console.log(people)

  return (
    <>

      <div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Usuario</th>
              <th>Email</th>
              <th>Telefone</th>
            </tr>
          </thead>

          <tbody>
            {
              people.map((person) => {
                return (
                  <tr key={person.id}>
                    <td>{person.name}</td>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
                    <td>{person.phone}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
