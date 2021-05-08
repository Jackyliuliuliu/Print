import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'printModelPipe'})
export class PrintModelPipe implements PipeTransform {
    transform(value: string | undefined) {
        if (value === 'black')
        {
            return "黑白";
        }
        if (value === 'color')
        {
            return "彩色"
        }

        return "";
    }
}