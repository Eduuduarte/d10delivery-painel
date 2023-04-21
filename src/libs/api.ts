export const api = {
    login: async (email: string, password: string): Promise<{error: string, token?: string}> => {
        return new Promise( resolve => {
            setTimeout(() => {
                if(email !== 'eduardo@exemplo.com.br'){
                    resolve({
                        error: 'E-mail e/ou senha não batem'
                    });
                } else {
                    resolve({
                        error: '',
                        token: '123'
                    });
                }
            }, 1000)
        })
    },
    forgotPasswor: async (email: string): Promise<{ error: string }> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ error: ''});
            }, 1000)
        });
    },
    redefinePassword: async (password: string, token: string): Promise<{ error: string }> => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ error: ''})
            }, 1000);
        })
    }
}