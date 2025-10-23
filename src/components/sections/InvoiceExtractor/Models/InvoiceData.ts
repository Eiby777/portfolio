export interface InvoiceField {
  label: string;
  value: string;
  validated: boolean;
  hasError?: boolean;
  errorMessage?: string;
}

export class Invoice {
  private readonly _fields: Map<string, InvoiceField>;
  private _format: string;

  constructor(format: string) {
    this._format = format;
    this._fields = new Map();
  }

  get format(): string {
    return this._format;
  }

  addField(key: string, field: InvoiceField): void {
    this._fields.set(key, field);
  }

  getField(key: string): InvoiceField | undefined {
    return this._fields.get(key);
  }

  getAllFields(): InvoiceField[] {
    return Array.from(this._fields.values());
  }

  hasErrors(): boolean {
    return this.getAllFields().some((field) => field.hasError);
  }

  isFullyValidated(): boolean {
    return this.getAllFields().every((field) => field.validated);
  }
}

export const sampleInvoiceData: InvoiceField[] = [
  {
    label: 'RNC',
    value: '101-23456-7',
    validated: true,
    hasError: false
  },
  {
    label: 'NCF',
    value: 'B0100000001',
    validated: true,
    hasError: false
  },
  {
    label: 'Fecha',
    value: '15/11/2024',
    validated: true,
    hasError: false
  },
  {
    label: 'Proveedor',
    value: 'Empresa Ejemplo SRL',
    validated: true,
    hasError: false
  },
  {
    label: 'Subtotal',
    value: 'RD$ 25,000.00',
    validated: false,
    hasError: true,
    errorMessage: 'Diferencia detectada con el total'
  },
  {
    label: 'ITBIS',
    value: 'RD$ 4,500.00',
    validated: true,
    hasError: false
  },
  {
    label: 'Total',
    value: 'RD$ 29,500.00',
    validated: true,
    hasError: false
  }
];

export const invoiceFormats = [
  { id: 'pdf', label: 'PDF', icon: '📄', color: '#ea4335' },
  { id: 'photo', label: 'Foto', icon: '📸', color: '#fbbc04' },
  { id: 'scan', label: 'Escaneo', icon: '🖨️', color: '#34a853' }
];
