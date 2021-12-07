
export class Assignment {
    assignmentId: number;
    name: string;
    course: string;
    notes: string;
    dueDate: string;
    completed: boolean;

    constructor() {
      this.name = '';
      this.course = '';
      this.notes = '';
      this.dueDate = '';
      this.completed = false;
    }
  }