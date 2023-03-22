import { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getClassificaCompleta } from '../api'

const Classifica = ({ lang }) => {
  const [classifica, setClassifica] = useState([])
  const getClassifica = async () => {
    const resultData = await getClassificaCompleta()
    setClassifica(resultData)
  }
  useEffect(() => {
    getClassifica()
  }, [])

  const numDescending = [...classifica].sort((a, b) => b.point - a.point)

  console.log(numDescending)

  return (
    <div className='rounded-4 mt-4 col-12 col-md-6'>
      <Table  hover className="mb-5 border-1 shadow-lg rounded-3 text-center table-danger">
        <thead>
          {lang === false ? (
            <tr>
            <th className='justify-content-end'>Posizione</th>
            <th>Squadra</th>
            <th>Punti</th>
          </tr>
          ) : (
            <tr>
            <th className='justify-content-end'>Position</th>
            <th>Club</th>
            <th>Points</th>
          </tr>
          )}
        </thead>
        <tbody>
          {numDescending.map((el, i) => {
            if(i === 0){
                return <tr key={el.id} className="table-success">
                <td>{i + 1}</td>
                <td > <Link to={`/club/${el.name}`} className="text-decoration-none text-black">{el.name}</Link> </td>
                <td>{el.point}</td>
              </tr>
            }
            return (
              <tr key={el.id}>
                <td>{i + 1}</td>
                <td> <Link to={`/club/${el.name}`} className="text-decoration-none text-black">{el.name}</Link> </td>
                <td>{el.point}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Classifica
