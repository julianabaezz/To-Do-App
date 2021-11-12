export type User ={
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Task ={
    user: string;
    title: string;
    description: string;
    date: Date;
    startDate: Date;
    endDate?: Date;
}

export type Payload = Omit <User, 'id'>