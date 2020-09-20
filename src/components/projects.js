import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
              Journal App
            </CardTitle>
            <CardText>
              Aplicacion creadora de notas conectada a firebase como base de datos y autenticacion
            </CardText>
            <CardActions border>
              <a href="https://github.com/nicoAlvarezMern/journal-app" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://nicolas-alvarez-mern-journal-app.netlify.app/" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
              Calendar App
            </CardTitle>
            <CardText>
              Aplicacion creada con el stack MERN. Es un calendario creador de eventos hecho con la libreria 
              react-big-calendar. Tiene un backend desarrollado en node conectado a una base de datos en la nube mongo.
            </CardText>
            <CardActions border>
                <a href="https://github.com/nicoAlvarezMern/calendar-app-react-front" target="_blank">
                  <Button colored>GitHub F</Button>
                </a>
                <a href="https://github.com/nicoAlvarezMern/calendar-app" target="_blank">
                  <Button colored>GitHub B</Button>
                </a>
                <a href="https://nicolas-alvarez-mern-calendar.herokuapp.com/" target="_blank">
                  <Button colored>Live Demo</Button>
                </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
              Bienes Raices
            </CardTitle>
            <CardText>
              Una muy buena practica para practicar diseño y maquetado en html y css. Una pagina de practica completamente estatica
              que expone casas de lujos
            </CardText>
            <CardActions border>
            <a href="https://github.com/nicoAlvarezMern/bienes-raices" target="_blank">
                <Button colored>GitHub</Button>
              </a>
              <a href="https://nicolas-alvarez-mern-bienes-raices.netlify.app/" target="_blank">
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Html/Css</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
