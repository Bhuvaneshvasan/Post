import { Component } from '@angular/core';
import { AgentService } from './agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ... other code

  constructor(private agentService: AgentService) {}

  onAgentCreate(agent: any) {
    console.log(agent);
    this.agentService.createAgent(agent).subscribe(
      (result) => {
        console.log(result);
        // Handle the result as needed
      },
      (error) => {
        console.error(error);
        // Handle errors if necessary
      }
    );
  }
}  