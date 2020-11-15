export declare type VisitCalendarResponse = {
    status: number;
    message: {
        error?: Error;
        visit_calendar?: VisitCalendarType[];
    };
};
declare type Error = {
    code: string;
    message: string;
};
declare type VisitCalendarType = {
    date: Date;
    n_visits: number;
};
export default class VisitCalendar {
    static getErrorResponse(query_error: any): VisitCalendarResponse;
    static getSuccessResponse(visitCalendar: VisitCalendarType[]): VisitCalendarResponse;
    static getVisitCalendar(from_date: string, to_date: string, recipient_id: string): Promise<VisitCalendarResponse>;
}
export {};
