export type User ={
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Task ={
    id: string;
    user?: string;
    title: string;
    description: string;
    startDate: string;
    endDate?: string;
    state: string
}

export type Payload = Omit <User, 'id'>