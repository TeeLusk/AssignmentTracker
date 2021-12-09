
export class Assignment {
    assignmentId: number;
    name: string;
    course: string;
    notes: string;
    dueDate: Date;
    completed: boolean;

    constructor() {
      this.name = null;
      this.course = null;
      this.notes = null;
      this.dueDate = null;
      this.completed = false;
    }
  }