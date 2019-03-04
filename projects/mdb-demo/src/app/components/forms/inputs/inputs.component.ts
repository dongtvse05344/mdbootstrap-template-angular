import { Component, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UploadOutput, UploadFile, UploadInput, humanizeBytes } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  @ViewChild('input') input: ElementRef;
  @ViewChild('rangeCloud') rangeCloud: ElementRef;
  range: any = 50;
  visibility: any;
  text: string;
  emailFormEx: FormControl;
  passwordFormEx: FormControl;
  noValidation: FormControl;
  noSuccessValidation: FormControl;
  noErrorValidation: FormControl;
  customMessages: FormControl;
  errorMessage = 'Custom error message';
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

  constructor(private renderer: Renderer2) {
    this.emailFormEx = new FormControl('', Validators.email);
    this.passwordFormEx = new FormControl('', Validators.required);
    this.noValidation = new FormControl('', Validators.required);
    this.noSuccessValidation = new FormControl('', Validators.required);
    this.noErrorValidation = new FormControl('', Validators.required);
    this.customMessages = new FormControl('', Validators.required);
    this.files = [];
    this.uploadInput = new EventEmitter<UploadInput>();
    this.humanizeBytes = humanizeBytes;
  }

  showFiles() {
    let files = '';
    for (let i = 0; i < this.files.length; i++) {
      files += this.files[i].name;
      if (!(this.files.length - 1 === i)) {
        files += ',';
      }
    }
    return files;
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: 'your-path-to-backend-endpoint',
      method: 'POST',
      data: { foo: 'bar' },
    };

    this.uploadInput.emit(event);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  onUploadOutput(output: UploadOutput | any): void {

    if (output.type === 'allAddedToQueue') {
    } else if (output.type === 'addedToQueue') {
      this.files.push(output.file); // add file to array when added
    } else if (output.type === 'uploading') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
    this.showFiles();
  }

  coverage() {
    if (typeof this.range === "string" && this.range.length !== 0) {

      return this.range;
    }
    const maxValue = this.input.nativeElement.getAttribute('max');
    const cloudRange = (this.range / maxValue) * 100;
    this.renderer.setStyle(this.rangeCloud.nativeElement, 'left', cloudRange + '%')
  }

}
