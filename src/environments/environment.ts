// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    token: 'HiEIS_TOKEN',
    roles: 'HiEIS_ROLES',
    endPoint: 'http://dongtv.hisoft.vn/',
    // endPoint: 'https://localhost:44370/',

    RoleName: {
        Admin: 'Admin',
        RoleManager: {
            text: 'Quản lý',
            value: 'Manager'
        },
        RoleAccountingManager: {
            text: 'Kế toán trưởng',
            value: 'AccountingManager'
        },
        RoleLiabilityAccountant: {
            text: 'Kế toán công nợ',
            value: 'LiabilityAccountant'
        },
        RolePayableAccountant: {
            text: 'Kế toán thanh toán',
            value: 'PayableAccountant'
        }
    },
    typeOfPayments: [
        {
            value: 'TM/CK',
            label: 'Tiền mặt hoặc chuyển khoản'
        },
        {
            value: 'TM',
            label: 'Tiền mặt'
        },
        {
            value: 'CK',
            label: 'Chuyển khoản'
        },
    ],
    
    
    apiPaths: {
        auth: {
            login: 'api/Auth/token',
            permissions: 'api/Auth/Permissions',
            information: 'api/Auth/info',
            company: 'api/Company/GetCompany'
        },
        company: {
            main: 'api/Company',
            toggleActive: 'ToggleActive',
            enterprise: '/GetEnterprise',
            staff: 'Staff',
            company: 'GetCompany'
        },
        customer: {
            main: 'api/Customer',
            enterprise: '/GetEnterprise',
        },
        account: {
            main: 'api/Account',
            admin: 'admin',
            ChangePassword: 'ChangePassword',
            ResetPassword: 'ResetPassword'

        },
        template: {
            main: 'api/Template',
            file: '/files'
        },
        product: {
            main: 'api/Product',
        },
        invoice: {
            main: 'api/Invoice',
            word: '/AmountInWord'
        },
        CurrentSign: {
            main: '/api/CurrentSign',
            code: '/GenerateCode',
            recode: '/RegenerateCode',
        },
    },

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
