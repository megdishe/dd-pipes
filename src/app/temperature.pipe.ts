import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah'): unknown {
    let val: number;
    if (!value) {
      return value;
    }
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let output = val;
    if (inputType == 'cel' && outputType == 'fah') {
      output = val * (9 / 5) + 32;
    } else if (inputType == 'fah' && outputType == 'cel') {
      output = (val - 32) * (5 / 9)
    }
    let symbol: '°C' | '°F';
    if (!outputType) {
      symbol = inputType === 'cel' ? '°C' : '°F';
    } else {
      symbol = outputType === 'cel' ? '°C' : '°F';
    }
    return `${output.toFixed(2)} ${symbol}`;
  }

}
