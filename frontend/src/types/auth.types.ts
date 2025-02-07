export type AccountType = {
    username: string;
    password: string;
}

export type AuthStoreType = {
    account: AccountType | null
    setAuthUser: (account: AccountType) => void
}