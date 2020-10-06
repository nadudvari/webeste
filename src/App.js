import React from 'react';
import image1 from './images/webeste_kep_01.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Card, Navbar, Container } from 'react-bootstrap';

function App() {
  return (
      <div className="App">
          <Navbar expand="lg" bg="light" sticky="top" fixed="top">
              <Navbar.Brand href="#home" className="logo">WEBESTE.HU <i style={{fontSize: 12, marginLeft: 10}}>Csak a web és te</i></Navbar.Brand>
          </Navbar>
          <div className="grid">
              <Container style={{ width: "100%" }}>
                  <Card className="Box" style={{ color: "#000", width: 600, backgroundImage: "linearGradient(transparent, #D3D3D3)"}}>
                      <Card.Body>
                          <Card.Text>
                              Ma már egy sikeres vállalkozáshoz elengedhetetlen egy igazán jó weboldal. Ennek segítségével tehetjük magunkat
                              elérhetővé a világ számára. Termékeinkről, szolgáltatásainkról tájékoztatást nyújtunk jövőbeli megrendelőinek,
                              így egyszerűbben kapcsolatot létesíthetünk bárkivel.
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card className="Box" style={{ color: "#000", width: 800, float: "right", marginRight: "auto" }}>
                      <Card.Body>
                          <Card.Img src={image1} style={{ width: 400, height: "auto", float: "right" }} />
                          <Card.Text>
                              A Webeste ebben áll rendelkezésedre! Csak a Web és TE! Segítünk, hogy vállalkozásod a következő szintre emelhesd,
                              hogy könnyebben elérhessen a világ és hogy sikeresebb légy! Weboldal tervezéssel és készítéssel foglalkozunk,
                              amit teljesen a te elképzeléseid szerint valósítunk meg, hogy maximálisan azt tükrözze, ami Te és a vállalkozásod
                              vagytok. Mindezek mellett, már meglévő weboldaladat is fejlesztjük, karbantartjuk, ha csak egy kis felfrissülésre,
                              változatosságra van szüksége az arculatodnak.
                          </Card.Text>
                      </Card.Body>
                  </Card>
                  <Card className="Box" style={{ width: 600 }}>
                      <Card.Body>
                          <Card.Text>
                              Legyen szó kis- vagy nagyvállalatról nálunk megtalálod az elképzelésednek megfelelő oldalt. Személyes blog,
                              tájékoztató jellegű weboldal vagy esetleg egy nagy webshop, mi segítünk ennek megvalósításában a lehető legjobb
                              minőségben és áron. Az általunk készített oldalakat kóddal írjuk és személyre szabott árakon dolgozunk, hogy
                              a legnagyobb elégedettséget tudjuk nyújtani számodra!
                          </Card.Text>
                      </Card.Body>
                  </Card>
              </Container>
          </div>
          <Card style={{ backgroundColor: "#8d8d8d", textAlign: "center" }}>
              <Card.Body>
                  <Card.Text>
                      Nincs másra szükséged csak az ötletedre és mi segítünk megvalósítani! Készen állsz?<br/>
                      <b>Elérhetőség:</b> <br/>
                      Csengeri Márk <br/>
                      Tel: +36/20-950-2304 <br/>
                      Email: csengeri10mark@gmail.com
                  </Card.Text>
              </Card.Body>
          </Card>
      </div>

  );
}

export default App;
