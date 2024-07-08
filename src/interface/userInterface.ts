export interface userData {
    id: Number,
    parent_id: Number,
    shortid: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    gender: String,
    birthdate: Date,
    avatar: String,
    present_address: String,
    permanent_address: String,
    nationality: Number,
    marital_status: String,
    contact_number: String,
    email: String,
    username: String,
    password: String,
    status: Number,
    user_role: String,
    notes: String,
    reset_token: String,
    created_by: Number,
    updated_by: Number,
}

export interface userModel {
    id: Number,
    parent_id: Number,
    shortid: String,
    first_name: String,
    middle_name: String,
    last_name: String,
    gender: String,
    birthdate: Date,
    avatar: String,
    present_address: String,
    permanent_address: String,
    nationality: Number,
    marital_status: String,
    contact_number: String,
    email: String,
    username: String,
    password: String,
    status: Number,
    user_role: String,
    notes: String,
    reset_token: String,
    created_by: Number,
    updated_by: Number,
    created_at: NativeDate,
    updated_at: NativeDate,
}