// export section
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SearchComponent } from './components/search/search.component';
import { ToastConfig } from './interface/app.interface';

// set varaible, value and export
export const add_task = AddTaskComponent;
export const progress = ProgressComponent;
export const seacr_task = SearchComponent;

// toaster
export const defaultToastConfig: ToastConfig = {
  position: 'top',
  duration: 3000,
  animation: 'fade',
};

