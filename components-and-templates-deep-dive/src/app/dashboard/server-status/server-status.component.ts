import {Component, OnDestroy, OnInit} from '@angular/core';

enum Status {
  ONLINE = 'online',
  OFFLINE = 'offline',
  UNKNOWN = 'unknown'
}

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  private interval!: ReturnType<typeof setTimeout>;

  currentStatus: Status = Status.ONLINE;

  ngOnInit() {
    this.interval = setInterval(this.updateCurrentStatus, 5000)
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval)
  }

  private readonly updateCurrentStatus = () => {
    const rnd = Math.random();

    if (rnd < 0.5) {
      this.currentStatus = Status.OFFLINE;
    } else if (rnd < 0.9) {
      this.currentStatus = Status.OFFLINE;
    } else {
      this.currentStatus = Status.UNKNOWN;
    }
  }
}
