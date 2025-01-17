export interface workScheduleData {
    user_id: number,
    type: number,
    effective_date: Date,
    check_in: string,
    check_out: string,
    auto_in_out: boolean,
    between_start: string,
    between_end: string,
    shift_length: number,
    paid_hours: number,
    monday: boolean,
    tuesday: boolean,
    wednesday: boolean,
    thursday: boolean,
    friday: boolean,
    saturday: boolean,
    sunday: boolean,
    onsite: boolean,
    created_by: number,
    updated_by: number,
}