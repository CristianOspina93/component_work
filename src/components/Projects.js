import React, { Component } from 'react';
import projects from '../data/projects.json';
import Project from './Project';

export default class Projects extends Component{


    render() {
      return(
        projects.allProjects.map((data) => {
          return  <Project imgName={data.imgName} title={data.title} description={data.description} />;
        }
          )
        )
      }
    }