interface CreateUserDto{
    username: string;
    password: string
}

interface UpdateUserDto{
    password: string;
}

interface ListAllEntities{
    limit: number;
}

export {
    CreateUserDto,
    UpdateUserDto,
    ListAllEntities
}