import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="./nico-alvarez.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Nicolas Alvarez</h2>
            <h4 style={{color: 'grey'}}>Programador</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Soy un estudiante de programacion de la Universidad Nacional de Avellaneda. Me encuentro cursando el
              segundo año de la carrera llevando 10 materias aprobadas. Me dedico especialmente al desarrollo web con
              React, Node, Express y Mongo aunque tambien tengo experiencia en otras tecnologias.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Localidad</h5>
            <p>Almirante Brown, Rafael Calzada</p>
            <h5>Telefono</h5>
            <p>(+54) 011-59463518</p>
            <h5>Email</h5>
            <p>nicolas.alvarez.mern@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Educacion</h2>


            <Education
              startYear={2019}
              endYear={"actualmente"}
              schoolName="Universidad Nacional Tecnologica"
              schoolDescription="Tecnico superior en sistemas informaticos"
            />
            <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Experiencia</h2>
            <Experience
              startYear={"01-06-2020"}
              endYear={"actualmente"}
              jobName="Epidata: Desarrollador Full Stack"
              jobDescription="Desarrollo web con React, Node, Mongo y express"
              />

              <Experience
                startYear={"01-02-2020"}
                endYear={"01-06-2020"}
                jobName="Epidata: Mulesoft Integrations Developer"
                jobDescription="
                Desarrollo de 30 conectores más test y deploy de los mismos en
                Mule4, una herramienta basada en Java para crear conectores e
                integraciones con otras apps.
                Las funcionalidades de los conectores eran:
                *Leer archivos de servidores FTP.
                *Enviar mails con información de archivos o de base de datos
                *Enviar archivos de un servidor FTP a otro.
                *Parseo de información para envío de mails , escribir otros
                archivos o ejecución de distintos stores procedures de base
                Oracle
                *Arquitectura del proyecto, variables de entorno, generación de
                logs.
                "
                />
            <Experience
              startYear={"04-11-2019"}
              endYear={"01-02-2020"}
              jobName="Epidata: Java Developer"
              jobDescription="
              Desarrollo backend utilizando Java+Spring
              Servicios API Rest, Integración con APIs externas, MySql , Test
              JUnit."
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={50}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={70}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
