export declare type VisitsResponse = {
    status: number;
    message: {
        error?: Error;
        visits?: Visit[];
    };
};
declare type Error = {
    code: string;
    message: string;
};
declare type Visit = {
    visit_id: string;
    start_timestamp: Date;
    end_timestamp: Date;
    n_events: number;
    events: any[];
};
export default class Visits {
    static getErrorResponse(query_error: any): VisitsResponse;
    static getSuccessResponse(visits: Visit[]): VisitsResponse;
    static convertResultsToResponseFormat(query_results: any): Visit[];
    static getVisits(from_date: string, to_date: string, recipient_id: string): Promise<VisitsResponse>;
}
export {};
