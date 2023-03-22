import { useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { BsArrow90DegLeft } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import '../SinglePlayer.css'

const SinglePlayer = ({ player, setInputClub, allClub, dark }) => {
  let { playerId } = useParams()

  let single = playerId
  console.log(single)
  console.log(player)

  playerId = parseInt(playerId)

  const darkMode = () => {
    if (dark === false) {
      document.body.style.backgroundColor = 'white'
    } else {
      document.body.style.backgroundColor = 'black'
    }
  }

  useEffect(() => {
    darkMode()
  }, [dark])

  return (
    <Container className="d-flex">
      <div className="col-2" id="fullPlayer">
        <Link to="/club">
          <Button
            variant="danger"
            className="mt-3 ms-3"
            onClick={() => {
              setInputClub('')
            }}
          >
            <BsArrow90DegLeft />
          </Button>
        </Link>

        <ul className="mt-5 list-group ">
          {allClub.map((el) => {
            return (
              <li
                key={el.id}
                className="list-group-item list-group-item-danger"
              >
                <Link
                  to={`/${el.id}/players`}
                  className="text-decoration-none text-dark "
                >
                  {el.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="col-12 col-md-10 mt-5 p-3">
        {player.map((player) => {
          if (player.id === playerId) {
            return (
              <Container
                key={player.id}
                className=" d-flex align-items-center justify-content-center mt-3"
              >
                <div className="col-12 col-md-8 mb-5 mt-2 ">
                  <Card className="me-5 rounded-4">
                    <Card.Header className="d-flex align-items-center justify-content-between bg-transparent">
                      <Link
                        to={`/club`}
                        className="d-flex align-items-center justify-content-around ms-2 text-decoration-none text-black"
                      >
                        {' '}
                        <img alt={player.id} src={player.urlImg} />{' '}
                        <div className="ms-5 ">
                          <h4 className="mt-3">
                            {player.firstName} {player.lastName}
                          </h4>

                          <p className="mt-3">
                            Ruolo: {player.position}
                            <br />
                            Età: {player.age} ({player.dateOfBirth})
                          </p>
                        </div>
                      </Link>
                      <Link to={`/club`} className="me-5" id="fullPlayer">
                        {' '}
                        <img alt={player.id} src={player.logo} />
                      </Link>
                    </Card.Header>
                    <Card.Body>
                      <Link to={`/${player.id}`}>
                        {' '}
                        <h5>{player.firstName}</h5>
                      </Link>
                      <Link to={`/${player.id}`}>
                        <h4>{player.lastName}</h4>
                      </Link>
                      <p>{player.position}</p>
                      <p>Storia del giocatore:</p>
                      <p>{player.firstName} {player.lastName} Non lo ricorderete mai per aver alzato una coppa, nè per
                        aver segnato un romantico goal al Liverpool ad Anfield,
                        ma è una leggenda, e la leggenda risiede nel fatto di
                        non essere stato. O meglio,non essere voluto essere.
                        Perchè Friday è Il giocatore anni ’70 per eccellenza:
                        Stan Bowles, George Best, Charlie George, chi più chi
                        meno, ce l’avevano fatta, e ce li ricordiamo, oltre che
                        per le vicende extra-calcistiche, anche per il talento.
                        Ma Friday no, Friday è rimasto sommerso nel sottobosco
                        della storia del calcio, come un musicista che suona
                        benissimo, ma che lo fa nella metropolitana invece che
                        alla Royal Albert Hall, perchè semplicemente certi
                        palcoscenici li rifiuta, più che non essere adatti lui.
                        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Recusandae ea nemo facilis dolor velit mollitia, saepe
                      obcaecati eveniet aperiam voluptas ex cum quis. Enim
                      labore vel soluta cumque eius iste. Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Recusandae ea nemo
                      facilis dolor velit mollitia, saepe obcaecati eveniet
                      aperiam voluptas ex cum quis. Enim labore vel soluta
                      cumque eius iste. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit. Recusandae ea nemo facilis dolor velit
                      mollitia, saepe obcaecati eveniet aperiam voluptas ex cum
                      quis. Enim labore vel soluta cumque eius iste. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Recusandae
                      ea nemo facilis dolor velit mollitia, saepe obcaecati
                      eveniet aperiam voluptas ex cum quis. Enim labore vel
                      soluta cumque eius iste. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Recusandae ea nemo facilis
                      dolor velit mollitia, saepe obcaecati eveniet aperiam
                      voluptas ex cum quis. Enim labore vel soluta cumque eius
                      iste. */}
                      </p>
                    </Card.Body>
                  </Card>
                </div>
              </Container>
            )
          }
          return <div key={player.id}></div>
        })}
      </div>
    </Container>
  )
}

export default SinglePlayer
