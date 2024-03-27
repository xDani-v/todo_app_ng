import { Component } from '@angular/core';
import { task } from '../../class/task.class';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  taskObj: task;
  tasklist: task[] = [];
  uniqueTags = new Set<string>();
  editingTaskIndex: number | null = 0;

  constructor() {
    this.taskObj = new task();
  }


  createnewTask() {
    if (this.editingTaskIndex === null) {
      this.tasklist.push(this.taskObj);
    } else {
      this.tasklist[this.editingTaskIndex] = this.taskObj;
      this.editingTaskIndex = null; // Cambia 0 a null
    }
    localStorage.setItem('tasklist', JSON.stringify(this.tasklist));
    this.taskObj = new task();
    this.filteredTasks = [...this.tasklist];
  }


  filterTag = '';
  filteredTasks: task[] = [];

  filterTasks() {
    if (this.filterTag.trim() === '') {
      this.filteredTasks = [...this.tasklist];
    } else {
      this.filteredTasks = this.tasklist.filter(task =>
        task.tags.split(',').map(tag => tag.trim()).includes(this.filterTag)
      );
    }
  }

  editTask(index: number) {
    // Aquí puedes agregar la lógica para editar la tarea
    // Por ejemplo, podrías establecer taskObj en la tarea seleccionada y luego actualizar el formulario
    this.taskObj = this.tasklist[index];
    this.editingTaskIndex = index;
  }

  deleteTask(index: number) {
    // Aquí puedes agregar la lógica para eliminar la tarea
    // Por ejemplo, podrías eliminar la tarea de la lista y luego actualizar localStorage
    this.tasklist.splice(index, 1);
    localStorage.setItem('tasklist', JSON.stringify(this.tasklist));
    this.filteredTasks = [...this.tasklist];
  }

}
