import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    let oa = '';
    args.forEach((a, i) => {
      oa += `ARG${i}: ${a}, `;
    });
    return `INR ${value.toFixed(2)} Optional: ${oa}`;
  }
}
