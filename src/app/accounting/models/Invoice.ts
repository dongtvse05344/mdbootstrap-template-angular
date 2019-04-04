import { InvoiceItem } from "./InvoiceItem";

export class Invoice{
    Id: string;
    Type: number;
    Date: string;
    DueDate: string;
    DateCreated:string;
    Number: string;
    Name: string;
    Enterprise: string;
    TaxNo: string;
    Mail: string;
    Address: string;
    Tel: string;
    Fax: string;
    Bank: string;
    BankAccountNumber: string;
    PaymentMethod: string;
    SubTotal: number;
    VATRate: number;
    VATAmount: number;
    Total: number;
    AmountInWords: string;
    Note: string;
    TemplateId: string;
    CustomerId: string;
    InvoiceItemCMs: InvoiceItem[];
}