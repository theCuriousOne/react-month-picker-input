declare module 'react-month-picker-input' {

    export type OnChange = (maskedValue: string, year: number, month: number) => any;

    export enum DateFormat {
        'MM/YY',
        'MM/YYYY',
        'YY/MM',
        'YYYY/MM'
    }

    export enum MonthFormat {
        SHORT = 'short',
        LONG = 'long'
    }

    export interface II18n {
        monthFormat: MonthFormat,
        dateFormat: object,
        monthNames: object
    }

    export interface MonthPickerIProps {
        year?: number,
        month?: number,
        inputProps?: {
            name?: string,
            id?: string,
        },
        lang?: string,
        onChange?: OnChange,
        closeOnSelect?: boolean,
        i18n?: Partial<II18n>
    }

    const MonthPickerInput: React.ComponentType<MonthPickerIProps>;

    export default MonthPickerInput
}
