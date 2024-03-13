import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ChartDataset, ChartOptions } from 'chart.js';
import { ChartModule } from 'primeng/chart';

interface Project {
  id: string;
  name: string;
}

@Component({
  selector: 'app-govt-dashboard',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ChartModule // Import ChartModule from PrimeNG
  ],
  templateUrl: './govt-dashboard.component.html',
  styleUrls: ['./govt-dashboard.component.css']
})
export class GovtDashboardComponent implements OnInit {
  dropdownOptions: Project[] = [];
  selectedProjectId: string = "";
  updateFlag = false;

  // Data and options for Bar chart
  barData: any = {
    labels: [], // Project names will be added dynamically
    datasets: [
      {
        label: 'Excellent',
        data: []
      },
      {
        label: 'Good',
        data: []
      },
      {
        label: 'Neutral',
        data: []
      },
      {
        label: 'Bad',
        data: []
      },
      {
        label: 'Terrible',
        data: []
      }
    ]
  };

  barOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{ stacked: true }],
      yAxes: [{ stacked: true }]
    }
  };

  doughnutData: any = {
    labels: ['ProjectA', 'ProjectB', 'ProjectC', 'ProjectD', 'ProjectE'],
    datasets: [
      {
        data: [300, 50, 100, 43, 23],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ]
      }
    ]
  };

  doughnutOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit() {
    // Retrieve data from local storage
    const projectsString = localStorage.getItem('projects');

    // Mock data for demonstration
    const projects: Project[] = [
      { id: '1', name: 'Project A' },
      { id: '2', name: 'Project B' },
      { id: '3', name: 'Project C' }
    ];

    // Populate dropdownOptions array with id and name
    this.dropdownOptions = projects;

    // Generate mock data for the bar chart
    projects.forEach(project => {
      this.barData.labels.push(project.name);
      this.barData.datasets[0].data.push(this.getRandomNumber());
      this.barData.datasets[1].data.push(this.getRandomNumber());
      this.barData.datasets[2].data.push(this.getRandomNumber());
      this.barData.datasets[3].data.push(this.getRandomNumber());
      this.barData.datasets[4].data.push(this.getRandomNumber());
    });
  }

  showGraph() {
    console.log('Selected project ID:', this.selectedProjectId);
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
  }
}
