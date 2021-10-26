export type User ={
    id: string;
    name: string;
    email: string;
    pass: string;
};

export type Task ={
    user: string;
    title: string;
    description: string;
    date: Date;
    startDate: Date;
    endDate?: Date;
}